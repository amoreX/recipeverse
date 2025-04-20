import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TagChip } from "@/components/tag-chip";
import { popularTags } from "@/lib/data";

interface TagsProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export function Tags({ selectedTags, setSelectedTags }: TagsProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Tags
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <button key={tag} onClick={() => toggleTag(tag)}>
                <TagChip tag={tag} active={selectedTags.includes(tag)} />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add custom tag..."
              className="border-[#E8E2D9] focus-visible:ring-[#6B8068]"
            />
            <Button
              variant="outline"
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
