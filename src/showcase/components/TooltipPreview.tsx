import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Plus, Settings, Info, Heart } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function TooltipPreview() {
  return (
    <ComponentSection title="Tooltip">
      <PreviewCard
        title="Basic Tooltip"
        description="Simple tooltip on hover"
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PreviewCard>

      <PreviewCard
        title="Tooltip with Icons"
        description="Tooltips on icon buttons"
        code={`<TooltipProvider>
  <div className="flex space-x-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add new item</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open settings</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Show information</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new item</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open settings</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Show information</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </PreviewCard>

      <PreviewCard
        title="Tooltip Positioning"
        description="Tooltips with different positions"
        code={`<TooltipProvider>
  <div className="grid grid-cols-3 gap-4 place-items-center">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>
    
    <div></div>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="grid grid-cols-3 gap-4 place-items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>
            
            <div></div>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </PreviewCard>

      <PreviewCard
        title="Rich Tooltip Content"
        description="Tooltip with formatted content"
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Rich Content</Button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <div className="space-y-2">
        <p className="font-semibold">Rich Tooltip</p>
        <p className="text-sm">
          This tooltip contains multiple paragraphs and formatted text.
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Heart className="h-3 w-3 text-red-500" />
          <span>With icons too!</span>
        </div>
      </div>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Rich Content</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <div className="space-y-2">
                <p className="font-semibold">Rich Tooltip</p>
                <p className="text-sm">
                  This tooltip contains multiple paragraphs and formatted text.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-3 w-3 text-red-500" />
                  <span>With icons too!</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PreviewCard>

      <PreviewCard
        title="Tooltip Delay"
        description="Tooltips with custom delay timing"
        code={`<TooltipProvider delayDuration={100}>
  <div className="flex space-x-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Fast (100ms)</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Quick tooltip</p>
      </TooltipContent>
    </Tooltip>
    
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Slow (1000ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Slow tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</TooltipProvider>`}
      >
        <TooltipProvider delayDuration={100}>
          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Fast (100ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick tooltip</p>
              </TooltipContent>
            </Tooltip>
            
            <TooltipProvider delayDuration={1000}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Slow (1000ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Slow tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TooltipProvider>
      </PreviewCard>

      <PreviewCard
        title="Non-Button Triggers"
        description="Tooltips on different elements"
        code={`<TooltipProvider>
  <div className="flex items-center space-x-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-help underline decoration-dashed">
          Hover this text
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is helpful text</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer" />
      </TooltipTrigger>
      <TooltipContent>
        <p>Blue circle</p>
      </TooltipContent>
    </Tooltip>
    
    <Tooltip>
      <TooltipTrigger asChild>
        <Info className="h-5 w-5 text-muted-foreground cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p>Information icon</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help underline decoration-dashed">
                  Hover this text
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is helpful text</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Blue circle</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-5 w-5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Information icon</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </PreviewCard>
    </ComponentSection>
  );
}