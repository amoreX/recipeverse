import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BasicInformation() {
  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Basic Information
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              placeholder="e.g., Homemade Sourdough Bread"
              className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your recipe in a few sentences..."
              className="min-h-[100px] resize-y border-[#E8E2D9] focus-visible:ring-[#6B8068]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cook-time">Cook Time (minutes)</Label>
              <Input
                id="cook-time"
                type="number"
                min="1"
                placeholder="45"
                className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="servings">Servings</Label>
              <Input
                id="servings"
                type="number"
                min="1"
                placeholder="4"
                className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
