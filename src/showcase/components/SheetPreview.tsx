import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SheetPreview() {
  return (
    <ComponentSection title="Sheet">
      <PreviewCard
        title="Basic Sheet"
        description="Sheet that slides in from the right side"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" value="@peduarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </PreviewCard>

      <PreviewCard
        title="Sheet from Left"
        description="Sheet that slides in from the left side"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="secondary">Open Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation Menu</SheetTitle>
      <SheetDescription>
        Access your navigation options here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Analytics
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Settings
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Help
      </Button>
    </div>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Access your navigation options here.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Help
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </PreviewCard>

      <PreviewCard
        title="Sheet from Top"
        description="Sheet that slides down from the top"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Top Sheet</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
      <SheetDescription>
        Your recent notifications and updates.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <div className="space-y-3">
        <div className="p-3 border rounded">
          <div className="font-medium text-sm">New message received</div>
          <div className="text-xs text-muted-foreground">2 minutes ago</div>
        </div>
        <div className="p-3 border rounded">
          <div className="font-medium text-sm">System update available</div>
          <div className="text-xs text-muted-foreground">1 hour ago</div>
        </div>
        <div className="p-3 border rounded">
          <div className="font-medium text-sm">Task completed</div>
          <div className="text-xs text-muted-foreground">3 hours ago</div>
        </div>
      </div>
    </div>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Top Sheet</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                Your recent notifications and updates.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <div className="font-medium text-sm">New message received</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="font-medium text-sm">System update available</div>
                  <div className="text-xs text-muted-foreground">1 hour ago</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="font-medium text-sm">Task completed</div>
                  <div className="text-xs text-muted-foreground">3 hours ago</div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </PreviewCard>

      <PreviewCard
        title="Sheet from Bottom"
        description="Sheet that slides up from the bottom"
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Open Bottom Sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Quick Actions</SheetTitle>
      <SheetDescription>
        Perform quick actions from here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline">Share</Button>
        <Button variant="outline">Copy Link</Button>
        <Button variant="outline">Download</Button>
        <Button variant="outline">Archive</Button>
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="ghost">Cancel</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open Bottom Sheet</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Quick Actions</SheetTitle>
              <SheetDescription>
                Perform quick actions from here.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline">Share</Button>
                <Button variant="outline">Copy Link</Button>
                <Button variant="outline">Download</Button>
                <Button variant="outline">Archive</Button>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </PreviewCard>
    </ComponentSection>
  );
}