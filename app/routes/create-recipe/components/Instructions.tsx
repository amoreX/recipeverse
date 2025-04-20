import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

interface InstructionsProps {
  instructions: string[];
  setInstructions: (instructions: string[]) => void;
  newInstruction: string;
  setNewInstruction: (instruction: string) => void;
}

export function Instructions({
  instructions,
  setInstructions,
  newInstruction,
  setNewInstruction,
}: InstructionsProps) {
  const addInstruction = () => {
    if (newInstruction.trim()) {
      setInstructions([...instructions, newInstruction.trim()]);
      setNewInstruction("");
    }
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Instructions
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6B8068] font-medium text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <Textarea
                    value={instruction}
                    onChange={(e) => {
                      const newInstructions = [...instructions];
                      newInstructions[index] = e.target.value;
                      setInstructions(newInstructions);
                    }}
                    className="min-h-[80px] resize-y border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeInstruction(index)}
                    className="mt-1 h-auto p-0 text-xs text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="mr-1 h-3 w-3" />
                    Remove step
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Textarea
              placeholder="Add new instruction step..."
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  e.preventDefault();
                  addInstruction();
                }
              }}
              className="min-h-[80px] resize-y border-[#E8E2D9] focus-visible:ring-[#6B8068]"
            />
            <Button
              variant="outline"
              onClick={addInstruction}
              className="h-auto self-start border-[#E8E2D9] hover:bg-[#F8F5F0]"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Step
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
