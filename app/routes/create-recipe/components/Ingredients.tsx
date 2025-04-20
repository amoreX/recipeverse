import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

interface IngredientsProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
  newIngredient: string;
  setNewIngredient: (ingredient: string) => void;
}

export function Ingredients({
  ingredients,
  setIngredients,
  newIngredient,
  setNewIngredient,
}: IngredientsProps) {
  const addIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Ingredients
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={ingredient}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index] = e.target.value;
                    setIngredients(newIngredients);
                  }}
                  className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                  className="h-9 w-9 shrink-0 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove ingredient</span>
                </Button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add new ingredient..."
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addIngredient();
                }
              }}
              className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
            />
            <Button
              variant="outline"
              onClick={addIngredient}
              className="shrink-0 border-[#E8E2D9] hover:bg-[#F8F5F0]"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
