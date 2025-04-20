import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

export function RecipeImage() {
  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Recipe Image
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-[#F8F5F0]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium text-[#2D2A26]">
                Upload Recipe Image
              </p>
              <p className="text-xs text-muted-foreground">
                Drag and drop or click to browse
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Recommended size: 1200 x 800 pixels (3:2 ratio)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
