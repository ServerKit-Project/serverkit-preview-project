import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline, FontBoldIcon } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function TogglePreview() {
  return (
    <ComponentSection title="Toggle">
      <PreviewCard
        title="Basic Toggle"
        description="Simple toggle button"
        code={`<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </PreviewCard>

      <PreviewCard
        title="Toggle with Text"
        description="Toggle button with text label"
        code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4 mr-2" />
  Bold
</Toggle>`}
      >
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4 mr-2" />
          Bold
        </Toggle>
      </PreviewCard>

      <PreviewCard
        title="Default Pressed Toggle"
        description="Toggle button that starts in pressed state"
        code={`<Toggle defaultPressed aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle defaultPressed aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </PreviewCard>

      <PreviewCard
        title="Disabled Toggle"
        description="Toggle button in disabled state"
        code={`<div className="flex items-center space-x-2">
  <Toggle disabled aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle disabled defaultPressed aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Toggle disabled aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled defaultPressed aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toggle Variants"
        description="Toggle buttons with different variants"
        code={`<div className="flex items-center space-x-2">
  <Toggle variant="default" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Toggle variant="default" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toggle Sizes"
        description="Toggle buttons in different sizes"
        code={`<div className="flex items-center space-x-2">
  <Toggle size="sm" aria-label="Toggle small">
    <Italic className="h-3 w-3" />
  </Toggle>
  <Toggle size="default" aria-label="Toggle default">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="lg" aria-label="Toggle large">
    <Italic className="h-5 w-5" />
  </Toggle>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Toggle size="sm" aria-label="Toggle small">
            <Italic className="h-3 w-3" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle default">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Italic className="h-5 w-5" />
          </Toggle>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Text-only Toggle"
        description="Toggle button with only text"
        code={`<div className="flex items-center space-x-2">
  <Toggle aria-label="Toggle bold">Bold</Toggle>
  <Toggle defaultPressed aria-label="Toggle italic">Italic</Toggle>
  <Toggle aria-label="Toggle underline">Underline</Toggle>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Toggle aria-label="Toggle bold">Bold</Toggle>
          <Toggle defaultPressed aria-label="Toggle italic">Italic</Toggle>
          <Toggle aria-label="Toggle underline">Underline</Toggle>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Formatting Toolbar"
        description="Toggle buttons used in a formatting toolbar"
        code={`<div className="flex items-center border rounded-md p-1 space-x-1">
  <Toggle size="sm" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="sm" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </Toggle>
  <div className="w-px h-6 bg-border mx-1" />
  <Toggle size="sm" variant="outline" aria-label="More options">
    <span className="text-xs">More</span>
  </Toggle>
</div>`}
      >
        <div className="flex items-center border rounded-md p-1 space-x-1">
          <Toggle size="sm" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="sm" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="sm" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
          <div className="w-px h-6 bg-border mx-1" />
          <Toggle size="sm" variant="outline" aria-label="More options">
            <span className="text-xs">More</span>
          </Toggle>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Custom Toggle States"
        description="Toggle with custom styling for different states"
        code={`<div className="flex items-center space-x-2">
  <Toggle 
    className="data-[state=on]:bg-green-500 data-[state=on]:text-white"
    aria-label="Toggle success"
  >
    Success
  </Toggle>
  <Toggle 
    className="data-[state=on]:bg-red-500 data-[state=on]:text-white"
    aria-label="Toggle error"
  >
    Error
  </Toggle>
  <Toggle 
    className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
    aria-label="Toggle info"
  >
    Info
  </Toggle>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Toggle 
            className="data-[state=on]:bg-green-500 data-[state=on]:text-white"
            aria-label="Toggle success"
          >
            Success
          </Toggle>
          <Toggle 
            className="data-[state=on]:bg-red-500 data-[state=on]:text-white"
            aria-label="Toggle error"
          >
            Error
          </Toggle>
          <Toggle 
            className="data-[state=on]:bg-blue-500 data-[state=on]:text-white"
            aria-label="Toggle info"
          >
            Info
          </Toggle>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}