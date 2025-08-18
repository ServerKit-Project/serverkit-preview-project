import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function CheckboxPreview() {
  const [checked, setChecked] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <ComponentSection title="Checkbox">
      <PreviewCard
        title="Basic Checkbox"
        description="Simple checkbox with label"
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={terms} onCheckedChange={setTerms} />
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </Label>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Controlled Checkbox"
        description="Checkbox with controlled state"
        code={`const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2">
  <Checkbox 
    id="controlled" 
    checked={checked} 
    onCheckedChange={setChecked} 
  />
  <Label htmlFor="controlled">
    Controlled checkbox ({checked ? 'checked' : 'unchecked'})
  </Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="controlled" 
            checked={checked} 
            onCheckedChange={setChecked} 
          />
          <Label htmlFor="controlled">
            Controlled checkbox ({checked ? 'checked' : 'unchecked'})
          </Label>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled States"
        description="Checkboxes in disabled states"
        code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled" disabled />
    <Label htmlFor="disabled">Disabled unchecked</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checked" disabled checked />
    <Label htmlFor="disabled-checked">Disabled checked</Label>
  </div>
</div>`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled checked />
            <Label htmlFor="disabled-checked">Disabled checked</Label>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Indeterminate State"
        description="Checkbox with indeterminate state"
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="indeterminate" checked="indeterminate" />
  <Label htmlFor="indeterminate">Indeterminate state</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="indeterminate" checked="indeterminate" />
          <Label htmlFor="indeterminate">Indeterminate state</Label>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Checkbox List"
        description="Multiple checkboxes in a list"
        code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" />
    <Label htmlFor="option3">Option 3</Label>
  </div>
</div>`}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option3" />
            <Label htmlFor="option3">Option 3</Label>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="With Description"
        description="Checkbox with additional description text"
        code={`<div className="flex items-start space-x-3">
  <Checkbox id="notifications" className="mt-1" />
  <div className="space-y-1">
    <Label htmlFor="notifications" className="text-sm font-medium">
      Email notifications
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive email notifications about your account activity.
    </p>
  </div>
</div>`}
      >
        <div className="flex items-start space-x-3">
          <Checkbox id="notifications" className="mt-1" />
          <div className="space-y-1">
            <Label htmlFor="notifications" className="text-sm font-medium">
              Email notifications
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications about your account activity.
            </p>
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}