import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { Instruction } from "@/lib/types";

interface InstructionsProps {
  instructions: Instruction[];
  setInstructions: (instructions: Instruction[]) => void;
}

export function Instructions({
  instructions,
  setInstructions,
}: InstructionsProps) {
  const addInstruction = () => {
    const newInstruction: Instruction = {
      step_number: instructions.length,
      description: "",
    };
    setInstructions([...instructions, newInstruction]);
  };

  const updateInstruction = (index: number, value: string) => {
    const updated = [...instructions];
    updated[index] = {
      ...updated[index],
      description: value,
    };
    setInstructions(updated);
  };

  const removeInstruction = (index: number) => {
    const updated = instructions
      .filter((_, i) => i !== index)
      .map((step, i) => ({
        ...step,
        step_number: i,
      }));
    setInstructions(updated);
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Instructions
        </h2>
        <div className="space-y-4">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#507c49] font-medium text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <Textarea
                  placeholder={`Step ${index + 1}...`}
                  value={instruction.description}
                  onChange={(e) => updateInstruction(index, e.target.value)}
                  className="min-h-[80px] resize-y border-[#E8E2D9] focus-visible:ring-[#507c49]"
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
          <Button
            variant="outline"
            onClick={addInstruction}
            className="mt-4 h-auto border-[#E8E2D9] hover:bg-[#F8F5F0]" // ✅ spacing improved
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Step
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
