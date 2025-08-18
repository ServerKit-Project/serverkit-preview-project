import React from "react";
import { Separator } from "@/components/ui/separator";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SeparatorPreview() {
  return (
    <ComponentSection title="Separator">
      <PreviewCard
        title="Horizontal Separator"
        description="Horizontal line to separate content"
        code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
      >
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Vertical Separator"
        description="Vertical separators between inline elements"
        code={`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Home</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Services</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`}
      >
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>About</div>
          <Separator orientation="vertical" />
          <div>Services</div>
          <Separator orientation="vertical" />
          <div>Contact</div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Content Sections"
        description="Using separators to divide content sections"
        code={`<div className="space-y-4">
  <div>
    <h3 className="font-semibold">Section 1</h3>
    <p className="text-sm text-muted-foreground">
      This is the first section of content.
    </p>
  </div>
  <Separator />
  <div>
    <h3 className="font-semibold">Section 2</h3>
    <p className="text-sm text-muted-foreground">
      This is the second section of content.
    </p>
  </div>
  <Separator />
  <div>
    <h3 className="font-semibold">Section 3</h3>
    <p className="text-sm text-muted-foreground">
      This is the third section of content.
    </p>
  </div>
</div>`}
      >
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Section 1</h3>
            <p className="text-sm text-muted-foreground">
              This is the first section of content.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Section 2</h3>
            <p className="text-sm text-muted-foreground">
              This is the second section of content.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold">Section 3</h3>
            <p className="text-sm text-muted-foreground">
              This is the third section of content.
            </p>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="List with Separators"
        description="List items separated by horizontal lines"
        code={`<div className="w-full max-w-md">
  <div className="py-2">
    <div className="font-medium">Apple</div>
    <div className="text-sm text-muted-foreground">Fresh red apple</div>
  </div>
  <Separator />
  <div className="py-2">
    <div className="font-medium">Banana</div>
    <div className="text-sm text-muted-foreground">Ripe yellow banana</div>
  </div>
  <Separator />
  <div className="py-2">
    <div className="font-medium">Orange</div>
    <div className="text-sm text-muted-foreground">Juicy orange fruit</div>
  </div>
  <Separator />
  <div className="py-2">
    <div className="font-medium">Grapes</div>
    <div className="text-sm text-muted-foreground">Sweet purple grapes</div>
  </div>
</div>`}
      >
        <div className="w-full max-w-md">
          <div className="py-2">
            <div className="font-medium">Apple</div>
            <div className="text-sm text-muted-foreground">Fresh red apple</div>
          </div>
          <Separator />
          <div className="py-2">
            <div className="font-medium">Banana</div>
            <div className="text-sm text-muted-foreground">Ripe yellow banana</div>
          </div>
          <Separator />
          <div className="py-2">
            <div className="font-medium">Orange</div>
            <div className="text-sm text-muted-foreground">Juicy orange fruit</div>
          </div>
          <Separator />
          <div className="py-2">
            <div className="font-medium">Grapes</div>
            <div className="text-sm text-muted-foreground">Sweet purple grapes</div>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Card Content Separator"
        description="Separator used within card content"
        code={`<div className="rounded-lg border p-6 max-w-md">
  <div className="space-y-2">
    <h3 className="text-lg font-semibold">Profile Settings</h3>
    <p className="text-sm text-muted-foreground">
      Manage your account preferences
    </p>
  </div>
  <Separator className="my-4" />
  <div className="space-y-2">
    <div className="flex justify-between">
      <span className="text-sm">Email notifications</span>
      <span className="text-sm text-muted-foreground">Enabled</span>
    </div>
    <div className="flex justify-between">
      <span className="text-sm">Two-factor auth</span>
      <span className="text-sm text-muted-foreground">Disabled</span>
    </div>
  </div>
</div>`}
      >
        <div className="rounded-lg border p-6 max-w-md">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Profile Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account preferences
            </p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Email notifications</span>
              <span className="text-sm text-muted-foreground">Enabled</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Two-factor auth</span>
              <span className="text-sm text-muted-foreground">Disabled</span>
            </div>
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}