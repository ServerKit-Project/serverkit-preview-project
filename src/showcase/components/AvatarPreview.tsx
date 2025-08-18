import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function AvatarPreview() {
  return (
    <ComponentSection title="Avatar">
      <PreviewCard
        title="Basic Avatar"
        description="Avatar with image and fallback text"
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" alt="@placeholder" />
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Avatar Sizes"
        description="Different avatar sizes using CSS classes"
        code={`<div className="flex items-center space-x-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback className="text-xs">CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="h-20 w-20">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback className="text-xl">CN</AvatarFallback>
  </Avatar>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xs">CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xl">CN</AvatarFallback>
          </Avatar>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Fallback Avatars"
        description="Avatars with various fallback initials"
        code={`<div className="flex items-center space-x-4">
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>XY</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MN</AvatarFallback>
  </Avatar>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Custom Fallback Colors"
        description="Avatars with custom background colors"
        code={`<div className="flex items-center space-x-4">
  <Avatar>
    <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-green-500 text-white">XY</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback className="bg-purple-500 text-white">MN</AvatarFallback>
  </Avatar>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-green-500 text-white">XY</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-purple-500 text-white">MN</AvatarFallback>
          </Avatar>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Avatar Group"
        description="Multiple avatars arranged in a group with overlap"
        code={`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+2</AvatarFallback>
  </Avatar>
</div>`}
      >
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}