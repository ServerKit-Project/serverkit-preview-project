import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function ToggleGroupPreview() {
  return (
    <ComponentSection title="Toggle Group">
      <PreviewCard
        title="Single Selection Toggle Group"
        description="Toggle group that allows single selection"
        code={`<ToggleGroup type="single">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single">
          <ToggleGroupItem value="left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </PreviewCard>

      <PreviewCard
        title="Multiple Selection Toggle Group"
        description="Toggle group that allows multiple selections"
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </PreviewCard>

      <PreviewCard
        title="Toggle Group with Text"
        description="Toggle group with text labels"
        code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </PreviewCard>

      <PreviewCard
        title="Toggle Group with Icons and Text"
        description="Toggle group with both icons and text"
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4 mr-2" />
    Bold
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-4 w-4 mr-2" />
    Italic
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="h-4 w-4 mr-2" />
    Underline
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4 mr-2" />
            Bold
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4 mr-2" />
            Italic
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4 mr-2" />
            Underline
          </ToggleGroupItem>
        </ToggleGroup>
      </PreviewCard>

      <PreviewCard
        title="Size Variants"
        description="Toggle groups in different sizes"
        code={`<div className="space-y-4">
  <div>
    <p className="text-sm font-medium mb-2">Small</p>
    <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-3 w-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-3 w-3" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-3 w-3" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">Default</p>
    <ToggleGroup type="single">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">Large</p>
    <ToggleGroup type="single" size="lg">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-5 w-5" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-5 w-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
</div>`}
      >
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">Small</p>
            <ToggleGroup type="single" size="sm">
              <ToggleGroupItem value="left">
                <AlignLeft className="h-3 w-3" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter className="h-3 w-3" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <AlignRight className="h-3 w-3" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Default</p>
            <ToggleGroup type="single">
              <ToggleGroupItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Large</p>
            <ToggleGroup type="single" size="lg">
              <ToggleGroupItem value="left">
                <AlignLeft className="h-5 w-5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter className="h-5 w-5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <AlignRight className="h-5 w-5" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled Toggle Group"
        description="Toggle group with disabled items"
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" disabled>
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" disabled>
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </PreviewCard>
    </ComponentSection>
  );
}