import React from "react";
import { Badge } from "@/components/ui/badge";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function BadgePreview() {
  return (
    <ComponentSection title="Badge">
      <PreviewCard
        title="Badge Variants"
        description="Different badge variants for various use cases"
        code={`<div className="flex items-center space-x-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Status Badges"
        description="Badges for showing status or state information"
        code={`<div className="flex items-center space-x-2">
  <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
  <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
  <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
  <Badge className="bg-blue-500 hover:bg-blue-600">Draft</Badge>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">Draft</Badge>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Notification Badges"
        description="Small badges for notifications and counts"
        code={`<div className="flex items-center space-x-4">
  <div className="relative">
    <div className="h-8 w-8 bg-muted rounded-full"></div>
    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
      3
    </Badge>
  </div>
  <div className="relative">
    <div className="h-8 w-8 bg-muted rounded-full"></div>
    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
      9
    </Badge>
  </div>
  <div className="relative">
    <div className="h-8 w-8 bg-muted rounded-full"></div>
    <Badge className="absolute -top-2 -right-2 h-2 w-2 rounded-full p-0 bg-green-500"></Badge>
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="h-8 w-8 bg-muted rounded-full"></div>
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </div>
          <div className="relative">
            <div className="h-8 w-8 bg-muted rounded-full"></div>
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
              9
            </Badge>
          </div>
          <div className="relative">
            <div className="h-8 w-8 bg-muted rounded-full"></div>
            <Badge className="absolute -top-2 -right-2 h-2 w-2 rounded-full p-0 bg-green-500"></Badge>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Tag Badges"
        description="Badges used as tags or labels"
        code={`<div className="flex flex-wrap gap-2">
  <Badge variant="secondary">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="secondary">Tailwind CSS</Badge>
  <Badge variant="secondary">Next.js</Badge>
  <Badge variant="secondary">Node.js</Badge>
  <Badge variant="secondary">MongoDB</Badge>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">MongoDB</Badge>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Size Variations"
        description="Badges in different sizes"
        code={`<div className="flex items-center space-x-2">
  <Badge className="text-xs px-1.5 py-0.5">Small</Badge>
  <Badge>Default</Badge>
  <Badge className="text-sm px-3 py-1">Large</Badge>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Badge className="text-xs px-1.5 py-0.5">Small</Badge>
          <Badge>Default</Badge>
          <Badge className="text-sm px-3 py-1">Large</Badge>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}