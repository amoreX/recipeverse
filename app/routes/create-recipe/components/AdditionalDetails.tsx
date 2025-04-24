import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdditionalDetailsProps {
  setDiff: (value: string) => void;
  setCuisine: (value: string) => void;
}
export function AdditionalDetails({
  setDiff,
  setCuisine,
}: AdditionalDetailsProps) {
  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Additional Details
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select onValueChange={setDiff}>
              <SelectTrigger className="border-[#E8E2D9] cursor-pointer focus-visible:ring-[#507c49]">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="cursor-pointer" value="easy">
                  Easy
                </SelectItem>
                <SelectItem className="cursor-pointer" value="medium">
                  Medium
                </SelectItem>
                <SelectItem className="cursor-pointer" value="hard">
                  Hard
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cuisine">Cuisine</Label>
            <Select onValueChange={setCuisine}>
              <SelectTrigger className="border-[#E8E2D9] focus-visible:ring-[#507c49] cursor-pointer">
                <SelectValue  placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem className="cursor-pointer" value="italian">Italian</SelectItem>
                <SelectItem className="cursor-pointer" value="mexican">Mexican</SelectItem>
                <SelectItem className="cursor-pointer" value="indian">Indian</SelectItem>
                <SelectItem className="cursor-pointer" value="japanese">Japanese</SelectItem>
                <SelectItem className="cursor-pointer" value="american">American</SelectItem>
                <SelectItem className="cursor-pointer" value="mediterranean">Mediterranean</SelectItem>
                <SelectItem className="cursor-pointer" value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
