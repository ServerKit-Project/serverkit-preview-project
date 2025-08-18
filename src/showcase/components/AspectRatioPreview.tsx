import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function AspectRatioPreview() {
  return (
    <ComponentSection title="Aspect Ratio">
      <PreviewCard
        title="16:9 Aspect Ratio"
        description="Maintains a 16:9 aspect ratio for video content"
        code={`<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <img
      src="/placeholder.jpg"
      alt="Video thumbnail"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>`}
      >
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground">16:9 Aspect Ratio</span>
            </div>
          </AspectRatio>
        </div>
      </PreviewCard>

      <PreviewCard
        title="1:1 Square Ratio"
        description="Perfect square aspect ratio for profile images"
        code={`<div className="w-[300px]">
  <AspectRatio ratio={1}>
    <img
      src="/placeholder.jpg"
      alt="Profile picture"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>`}
      >
        <div className="w-[300px]">
          <AspectRatio ratio={1}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground">1:1 Square</span>
            </div>
          </AspectRatio>
        </div>
      </PreviewCard>

      <PreviewCard
        title="4:3 Aspect Ratio"
        description="Classic 4:3 aspect ratio for traditional media"
        code={`<div className="w-[400px]">
  <AspectRatio ratio={4 / 3}>
    <img
      src="/placeholder.jpg"
      alt="Traditional photo"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>`}
      >
        <div className="w-[400px]">
          <AspectRatio ratio={4 / 3}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground">4:3 Aspect Ratio</span>
            </div>
          </AspectRatio>
        </div>
      </PreviewCard>

      <PreviewCard
        title="21:9 Ultra-wide"
        description="Ultra-wide aspect ratio for cinematic content"
        code={`<div className="w-[500px]">
  <AspectRatio ratio={21 / 9}>
    <img
      src="/placeholder.jpg"
      alt="Cinematic shot"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>`}
      >
        <div className="w-[500px]">
          <AspectRatio ratio={21 / 9}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground">21:9 Ultra-wide</span>
            </div>
          </AspectRatio>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Multiple Ratios"
        description="Grid of different aspect ratios"
        code={`<div className="grid grid-cols-2 gap-4 w-full max-w-md">
  <AspectRatio ratio={1}>
    <div className="bg-muted rounded-md flex items-center justify-center">
      1:1
    </div>
  </AspectRatio>
  <AspectRatio ratio={16/9}>
    <div className="bg-muted rounded-md flex items-center justify-center">
      16:9
    </div>
  </AspectRatio>
  <AspectRatio ratio={4/3}>
    <div className="bg-muted rounded-md flex items-center justify-center">
      4:3
    </div>
  </AspectRatio>
  <AspectRatio ratio={3/2}>
    <div className="bg-muted rounded-md flex items-center justify-center">
      3:2
    </div>
  </AspectRatio>
</div>`}
      >
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <AspectRatio ratio={1}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground text-sm">1:1</span>
            </div>
          </AspectRatio>
          <AspectRatio ratio={16/9}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground text-sm">16:9</span>
            </div>
          </AspectRatio>
          <AspectRatio ratio={4/3}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground text-sm">4:3</span>
            </div>
          </AspectRatio>
          <AspectRatio ratio={3/2}>
            <div className="bg-muted rounded-md flex items-center justify-center w-full h-full">
              <span className="text-muted-foreground text-sm">3:2</span>
            </div>
          </AspectRatio>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}