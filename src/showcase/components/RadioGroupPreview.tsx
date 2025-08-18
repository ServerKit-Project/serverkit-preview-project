import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function RadioGroupPreview() {
  return (
    <ComponentSection title="Radio Group">
      <PreviewCard
        title="Basic Radio Group"
        description="Simple radio group with multiple options"
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Option Three</Label>
          </div>
        </RadioGroup>
      </PreviewCard>

      <PreviewCard
        title="Radio Group with Descriptions"
        description="Radio group with additional description text"
        code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="default" id="r1" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="r1" className="text-sm font-medium">
        Default
      </Label>
      <p className="text-sm text-muted-foreground">
        This is the default option with standard settings.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="r2" className="text-sm font-medium">
        Comfortable
      </Label>
      <p className="text-sm text-muted-foreground">
        Provides extra spacing and larger touch targets.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="compact" id="r3" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="r3" className="text-sm font-medium">
        Compact
      </Label>
      <p className="text-sm text-muted-foreground">
        Saves space with smaller elements and reduced padding.
      </p>
    </div>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="default" id="r1" className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor="r1" className="text-sm font-medium">
                Default
              </Label>
              <p className="text-sm text-muted-foreground">
                This is the default option with standard settings.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor="r2" className="text-sm font-medium">
                Comfortable
              </Label>
              <p className="text-sm text-muted-foreground">
                Provides extra spacing and larger touch targets.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="compact" id="r3" className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor="r3" className="text-sm font-medium">
                Compact
              </Label>
              <p className="text-sm text-muted-foreground">
                Saves space with smaller elements and reduced padding.
              </p>
            </div>
          </div>
        </RadioGroup>
      </PreviewCard>

      <PreviewCard
        title="Disabled Radio Group"
        description="Radio group with disabled options"
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="d1" />
    <Label htmlFor="d1">Available Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="d2" disabled />
    <Label htmlFor="d2" className="text-muted-foreground">
      Disabled Option
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="d3" />
    <Label htmlFor="d3">Another Available Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-four" id="d4" disabled />
    <Label htmlFor="d4" className="text-muted-foreground">
      Also Disabled
    </Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="d1" />
            <Label htmlFor="d1">Available Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="d2" disabled />
            <Label htmlFor="d2" className="text-muted-foreground">
              Disabled Option
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="d3" />
            <Label htmlFor="d3">Another Available Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="d4" disabled />
            <Label htmlFor="d4" className="text-muted-foreground">
              Also Disabled
            </Label>
          </div>
        </RadioGroup>
      </PreviewCard>

      <PreviewCard
        title="Theme Selection"
        description="Radio group for theme selection"
        code={`<div className="space-y-3">
  <h3 className="text-sm font-medium">Choose a theme</h3>
  <RadioGroup defaultValue="light">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="light" id="light" />
      <Label htmlFor="light">Light theme</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="dark" id="dark" />
      <Label htmlFor="dark">Dark theme</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="system" id="system" />
      <Label htmlFor="system">System preference</Label>
    </div>
  </RadioGroup>
</div>`}
      >
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Choose a theme</h3>
          <RadioGroup defaultValue="light">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light">Light theme</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark">Dark theme</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label htmlFor="system">System preference</Label>
            </div>
          </RadioGroup>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}