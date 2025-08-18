import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function AccordionPreview() {
  return (
    <ComponentSection title="Accordion">
      <PreviewCard
        title="Basic Accordion"
        description="A simple accordion with multiple collapsible items"
        code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PreviewCard>

      <PreviewCard
        title="Multiple Accordion"
        description="Allow multiple items to be open simultaneously"
        code={`<Accordion type="multiple" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes, with type="multiple" you can open multiple items at once.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does it work?</AccordionTrigger>
    <AccordionContent>
      Simply set the type prop to "multiple" instead of "single".
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
            <AccordionContent>
              Yes, with type="multiple" you can open multiple items at once.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              Simply set the type prop to "multiple" instead of "single".
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What about performance?</AccordionTrigger>
            <AccordionContent>
              The accordion is optimized for performance and accessibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PreviewCard>

      <PreviewCard
        title="Default Open Value"
        description="Set a default open item when the component mounts"
        code={`<Accordion type="single" defaultValue="item-2" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>First item</AccordionTrigger>
    <AccordionContent>First item content</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second item (default open)</AccordionTrigger>
    <AccordionContent>This item is open by default</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="single" defaultValue="item-2" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>First item</AccordionTrigger>
            <AccordionContent>First item content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second item (default open)</AccordionTrigger>
            <AccordionContent>This item is open by default</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Third item</AccordionTrigger>
            <AccordionContent>Third item content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </PreviewCard>
    </ComponentSection>
  );
}