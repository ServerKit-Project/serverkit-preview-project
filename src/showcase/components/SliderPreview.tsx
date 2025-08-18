import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SliderPreview() {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([20, 80]);

  return (
    <ComponentSection title="Slider">
      <PreviewCard
        title="Basic Slider"
        description="Simple slider with single value"
        code={`const [value, setValue] = useState([50]);

<div className="space-y-4 w-full max-w-md">
  <Label>Volume: {value[0]}%</Label>
  <Slider
    value={value}
    onValueChange={setValue}
    max={100}
    step={1}
    className="w-full"
  />
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Label>Volume: {value[0]}%</Label>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Range Slider"
        description="Slider with multiple values for range selection"
        code={`const [rangeValue, setRangeValue] = useState([20, 80]);

<div className="space-y-4 w-full max-w-md">
  <Label>Price Range: $\{rangeValue[0]} - $\{rangeValue[1]}</Label>
  <Slider
    value={rangeValue}
    onValueChange={setRangeValue}
    max={100}
    step={1}
    className="w-full"
  />
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Label>Price Range: ${rangeValue[0]} - ${rangeValue[1]}</Label>
          <Slider
            value={rangeValue}
            onValueChange={setRangeValue}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Stepped Slider"
        description="Slider with larger steps"
        code={`<div className="space-y-4 w-full max-w-md">
  <Label>Step Size: 10</Label>
  <Slider
    defaultValue={[50]}
    max={100}
    step={10}
    className="w-full"
  />
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Label>Step Size: 10</Label>
          <Slider
            defaultValue={[50]}
            max={100}
            step={10}
            className="w-full"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled Slider"
        description="Slider in disabled state"
        code={`<div className="space-y-4 w-full max-w-md">
  <Label>Disabled Slider</Label>
  <Slider
    defaultValue={[30]}
    max={100}
    step={1}
    disabled
    className="w-full"
  />
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Label>Disabled Slider</Label>
          <Slider
            defaultValue={[30]}
            max={100}
            step={1}
            disabled
            className="w-full"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Custom Range Slider"
        description="Slider with custom min and max values"
        code={`<div className="space-y-4 w-full max-w-md">
  <Label>Temperature: -10°C to 40°C</Label>
  <Slider
    defaultValue={[15]}
    min={-10}
    max={40}
    step={1}
    className="w-full"
  />
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <Label>Temperature: -10°C to 40°C</Label>
          <Slider
            defaultValue={[15]}
            min={-10}
            max={40}
            step={1}
            className="w-full"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Multiple Sliders"
        description="Multiple sliders for different settings"
        code={`<div className="space-y-6 w-full max-w-md">
  <div className="space-y-2">
    <Label>Brightness</Label>
    <Slider defaultValue={[70]} max={100} step={1} />
  </div>
  <div className="space-y-2">
    <Label>Contrast</Label>
    <Slider defaultValue={[50]} max={100} step={1} />
  </div>
  <div className="space-y-2">
    <Label>Saturation</Label>
    <Slider defaultValue={[60]} max={100} step={1} />
  </div>
</div>`}
      >
        <div className="space-y-6 w-full max-w-md">
          <div className="space-y-2">
            <Label>Brightness</Label>
            <Slider defaultValue={[70]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Contrast</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Saturation</Label>
            <Slider defaultValue={[60]} max={100} step={1} />
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}