import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
}

const ProjectCardSkeleton: React.FC<Props> = ({ className = "" }) => {
  return (
    <Card
      className={cn(
        "group relative flex flex-col h-full overflow-hidden border bg-background transition-all hover:shadow-lg",
        className
      )}
    >
      {/* Image/Video Placeholder */}
      <Skeleton className="h-44 md:h-52 w-full bg-muted rounded-xl" />

      <CardHeader className="px-2">
        <Skeleton className="h-5 w-3/4 my-1" /> {/* Title Placeholder */}
        <Skeleton className="h-4 w-1/3" /> {/* Date Placeholder */}
        <Skeleton className="h-3 w-full mt-1" /> {/* Description Placeholder */}
        <Skeleton className="h-3 w-5/6" />
      </CardHeader>

      <CardContent className="mt-auto px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {/* Tags Placeholder */}
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} className="h-4 w-12 rounded-full" />
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {/* Links Placeholder */}
        <div className="flex flex-wrap gap-1">
          {[...Array(2)].map((_, idx) => (
            <Skeleton key={idx} className="h-4 w-20 rounded-md" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCardSkeleton;
