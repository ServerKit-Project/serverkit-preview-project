import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function HoverCardPreview() {
  return (
    <ComponentSection title="Hover Card">
      <PreviewCard
        title="Basic Hover Card"
        description="Hover over the trigger to see the card"
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </PreviewCard>

      <PreviewCard
        title="Simple Hover Card"
        description="Basic hover card with minimal content"
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Quick Info</h4>
      <p className="text-sm text-muted-foreground">
        This is a simple hover card with some basic information.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Quick Info</h4>
              <p className="text-sm text-muted-foreground">
                This is a simple hover card with some basic information.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </PreviewCard>

      <PreviewCard
        title="User Profile Hover Card"
        description="Hover card displaying user profile information"
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost" className="p-0 h-auto">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">shadcn</h4>
        <p className="text-sm">
          Building the future of web development with open source.
        </p>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Joined March 2023
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">shadcn</h4>
                <p className="text-sm">
                  Building the future of web development with open source.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined March 2023
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </PreviewCard>

      <PreviewCard
        title="Link Hover Card"
        description="Hover card for external links with preview"
        code={`<p className="text-sm">
  Visit our{" "}
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto text-sm">
        documentation
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Documentation</h4>
        <p className="text-sm text-muted-foreground">
          Comprehensive guides and API reference to help you build with our platform.
        </p>
        <div className="flex items-center pt-2">
          <span className="text-xs text-muted-foreground">
            Last updated: Today
          </span>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
  {" "}for more information.
</p>`}
      >
        <p className="text-sm">
          Visit our{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 h-auto text-sm">
                documentation
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides and API reference to help you build with our platform.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Last updated: Today
                  </span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {" "}for more information.
        </p>
      </PreviewCard>
    </ComponentSection>
  );
}