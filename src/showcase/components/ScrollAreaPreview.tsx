import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function ScrollAreaPreview() {
  return (
    <ComponentSection title="Scroll Area">
      <PreviewCard
        title="Basic Scroll Area"
        description="Scrollable area with custom scrollbar styling"
        code={`const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
);

<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">
          {tag}
        </div>
        <Separator className="my-2" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className="text-sm">
                  {tag}
                </div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </PreviewCard>

      <PreviewCard
        title="Horizontal Scroll Area"
        description="Horizontally scrollable content"
        code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <figure key={i} className="shrink-0">
        <div className="overflow-hidden rounded-md bg-muted h-24 w-24 flex items-center justify-center">
          <span className="text-sm font-medium">{i + 1}</span>
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo {i + 1}
        </figcaption>
      </figure>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <figure key={i} className="shrink-0">
                <div className="overflow-hidden rounded-md bg-muted h-24 w-24 flex items-center justify-center">
                  <span className="text-sm font-medium">{i + 1}</span>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollArea>
      </PreviewCard>

      <PreviewCard
        title="Text Scroll Area"
        description="Scrollable text content with paragraphs"
        code={`<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <h4 className="mb-4 text-sm font-medium leading-none">
    Lorem Ipsum Content
  </h4>
  <p className="text-sm text-muted-foreground mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p className="text-sm text-muted-foreground mb-4">
    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p className="text-sm text-muted-foreground mb-4">
    Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur.
  </p>
  <p className="text-sm text-muted-foreground mb-4">
    Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <p className="text-sm text-muted-foreground">
    Sed ut perspiciatis unde omnis iste natus error sit 
    voluptatem accusantium doloremque laudantium.
  </p>
</ScrollArea>`}
      >
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Lorem Ipsum Content
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm text-muted-foreground">
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium.
          </p>
        </ScrollArea>
      </PreviewCard>

      <PreviewCard
        title="List Scroll Area"
        description="Scrollable list with items"
        code={`<ScrollArea className="h-[300px] w-[250px] rounded-md border">
  <div className="p-4 space-y-2">
    <h4 className="mb-4 text-sm font-medium leading-none">Menu Items</h4>
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        <div className="text-sm font-medium">Menu Item {i + 1}</div>
        <div className="text-xs text-muted-foreground">
          Description for item {i + 1}
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-[300px] w-[250px] rounded-md border">
          <div className="p-4 space-y-2">
            <h4 className="mb-4 text-sm font-medium leading-none">Menu Items</h4>
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                <div className="text-sm font-medium">Menu Item {i + 1}</div>
                <div className="text-xs text-muted-foreground">
                  Description for item {i + 1}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </PreviewCard>
    </ComponentSection>
  );
}