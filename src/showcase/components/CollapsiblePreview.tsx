import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function CollapsiblePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <ComponentSection title="Collapsible">
      <PreviewCard
        title="Basic Collapsible"
        description="Simple collapsible content with trigger button"
        code={`const [isOpen, setIsOpen] = useState(false);

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">
      @peduarte starred 3 repositories
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </PreviewCard>

      <PreviewCard
        title="Default Open"
        description="Collapsible that starts in an open state"
        code={`const [isOpen, setIsOpen] = useState(true);

<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  className="w-[350px] space-y-2"
>
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">Settings</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        {isOpen ? "Hide" : "Show"} options
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border p-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Dark mode</span>
          <input type="checkbox" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Auto-save</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>
    </div>
  </CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible
          open={isOpen2}
          onOpenChange={setIsOpen2}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Settings</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isOpen2 ? "Hide" : "Show"} options
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dark mode</span>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notifications</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-save</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </PreviewCard>

      <PreviewCard
        title="Simple Text Toggle"
        description="Basic collapsible text content"
        code={`<Collapsible className="w-[350px] space-y-2">
  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 rounded-md">
    <span className="font-medium">Click to expand</span>
    <ChevronsUpDown className="h-4 w-4" />
  </CollapsibleTrigger>
  <CollapsibleContent className="px-4">
    <p className="text-sm text-muted-foreground">
      This is the collapsible content. It can contain any type of content
      including text, images, forms, or other components.
    </p>
  </CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible className="w-[350px] space-y-2">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 rounded-md">
            <span className="font-medium">Click to expand</span>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4">
            <p className="text-sm text-muted-foreground">
              This is the collapsible content. It can contain any type of content
              including text, images, forms, or other components.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </PreviewCard>

      <PreviewCard
        title="FAQ Style"
        description="Collapsible designed for FAQ sections"
        code={`<div className="w-[350px] space-y-2">
  <Collapsible className="border rounded-md">
    <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left">
      <span className="font-medium">What is React?</span>
      <ChevronsUpDown className="h-4 w-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="px-4 pb-4">
      <p className="text-sm text-muted-foreground">
        React is a JavaScript library for building user interfaces,
        particularly web applications with dynamic, interactive elements.
      </p>
    </CollapsibleContent>
  </Collapsible>
</div>`}
      >
        <div className="w-[350px] space-y-2">
          <Collapsible className="border rounded-md">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left">
              <span className="font-medium">What is React?</span>
              <ChevronsUpDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
              <p className="text-sm text-muted-foreground">
                React is a JavaScript library for building user interfaces,
                particularly web applications with dynamic, interactive elements.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}