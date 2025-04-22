// components/recipe-card-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function RecipeCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl border-[#E8E2D9] py-0">
      <Skeleton className="aspect-[3/2] w-full" />
      <CardContent className="px-5 pb-5 pt-4">
        <div className="mb-2 flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="mb-4 h-4 w-full" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24 rounded-md" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}
