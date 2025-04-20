import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";
import { Ingredient } from "@/lib/types";
interface IngredientsProps {
  ingredients: Ingredient[];
  setIngredients: (ingredients: Ingredient[]) => void;
}
export function Ingredients({ ingredients, setIngredients }: IngredientsProps) {
  const addIngredient = () => {
    const newIngredient: Ingredient = {
      description: "",
      quantity: undefined,
      unit: "",
      order_index: ingredients.length,
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const updateIngredient = (
    index: number,
    field: keyof Ingredient,
    value: string | number
  ) => {
    const updated = [...ingredients];
    updated[index] = {
      ...updated[index],
      [field]:
        field === "quantity" ? parseFloat(value as string) || undefined : value,
    };
    setIngredients(updated);
  };

  const removeIngredient = (index: number) => {
    const updated = ingredients
      .filter((_, i) => i !== index)
      .map((ing, i) => ({
        ...ing,
        order_index: i,
      }));
    setIngredients(updated);
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6 space-y-4">
        <h2 className="font-serif text-lg font-semibold text-[#2D2A26]">
          Ingredients
        </h2>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 items-center">
            <Input
              placeholder="Description"
              value={ingredient.description}
              onChange={(e) =>
                updateIngredient(index, "description", e.target.value)
              }
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={ingredient.quantity ?? ""}
              onChange={(e) =>
                updateIngredient(index, "quantity", e.target.value)
              }
            />
            <Input
              placeholder="Unit"
              value={ingredient.unit ?? ""}
              onChange={(e) => updateIngredient(index, "unit", e.target.value)}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeIngredient(index)}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          variant="outline"
          onClick={addIngredient}
          className="border-[#E8E2D9] hover:bg-[#F8F5F0]"
        >
          <Plus className="mr-1 h-4 w-4" />
          Add Ingredient
        </Button>
      </CardContent>
    </Card>
  );
}
