import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function DrawerPreview() {
  return (
    <ComponentSection title="Drawer">
      <PreviewCard
        title="Basic Drawer"
        description="Simple drawer that slides up from the bottom"
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription>Make changes to your profile.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-y-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>Make changes to your profile.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </PreviewCard>

      <PreviewCard
        title="Drawer with Form"
        description="Drawer containing a complete form"
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Add Contact</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-md">
      <DrawerHeader>
        <DrawerTitle>Add New Contact</DrawerTitle>
        <DrawerDescription>
          Fill in the information below to add a new contact.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full Name</Label>
          <Input id="contact-name" placeholder="Enter full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" type="email" placeholder="Enter email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input id="contact-phone" placeholder="Enter phone number" />
        </div>
      </div>
      <DrawerFooter>
        <Button>Save Contact</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Add Contact</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-md">
              <DrawerHeader>
                <DrawerTitle>Add New Contact</DrawerTitle>
                <DrawerDescription>
                  Fill in the information below to add a new contact.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="Enter full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="Enter email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input id="contact-phone" placeholder="Enter phone number" />
                </div>
              </div>
              <DrawerFooter>
                <Button>Save Contact</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </PreviewCard>

      <PreviewCard
        title="Simple Drawer"
        description="Minimal drawer with just content"
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="ghost">Quick Action</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Copy Link
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Share
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Download
          </Button>
        </div>
      </div>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost">Quick Action</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Copy Link
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Share
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </PreviewCard>
    </ComponentSection>
  );
}