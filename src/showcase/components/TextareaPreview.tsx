import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function TextareaPreview() {
  return (
    <ComponentSection title="Textarea">
      <PreviewCard
        title="Basic Textarea"
        description="Simple textarea with label"
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Textarea with Text"
        description="Textarea with helper text"
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message-2">Your message</Label>
  <Textarea placeholder="Type your message here." id="message-2" />
  <p className="text-sm text-muted-foreground">
    Your message will be copied to the support team.
  </p>
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Textarea with Button"
        description="Textarea with an action button"
        code={`<div className="grid w-full gap-2">
  <Label htmlFor="message-3">Your message</Label>
  <Textarea placeholder="Type your message here." id="message-3" />
  <Button className="justify-self-end">Send message</Button>
</div>`}
      >
        <div className="grid w-full gap-2">
          <Label htmlFor="message-3">Your message</Label>
          <Textarea placeholder="Type your message here." id="message-3" />
          <Button className="justify-self-end">Send message</Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled Textarea"
        description="Textarea in disabled state"
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message-disabled">Disabled textarea</Label>
  <Textarea 
    placeholder="You can't type here..." 
    id="message-disabled" 
    disabled 
  />
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-disabled">Disabled textarea</Label>
          <Textarea 
            placeholder="You can't type here..." 
            id="message-disabled" 
            disabled 
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Textarea with Value"
        description="Textarea with default content"
        code={`<div className="grid w-full gap-1.5">
  <Label htmlFor="message-value">Bio</Label>
  <Textarea 
    placeholder="Tell us about yourself..." 
    id="message-value"
    defaultValue="I am a software developer passionate about creating amazing user experiences."
  />
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-value">Bio</Label>
          <Textarea 
            placeholder="Tell us about yourself..." 
            id="message-value"
            defaultValue="I am a software developer passionate about creating amazing user experiences."
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Textarea Sizes"
        description="Textareas with different sizes"
        code={`<div className="grid w-full gap-4">
  <div className="grid gap-1.5">
    <Label htmlFor="small">Small textarea</Label>
    <Textarea 
      placeholder="Small size..." 
      id="small"
      className="min-h-[60px]"
    />
  </div>
  <div className="grid gap-1.5">
    <Label htmlFor="medium">Medium textarea</Label>
    <Textarea 
      placeholder="Medium size..." 
      id="medium"
      className="min-h-[100px]"
    />
  </div>
  <div className="grid gap-1.5">
    <Label htmlFor="large">Large textarea</Label>
    <Textarea 
      placeholder="Large size..." 
      id="large"
      className="min-h-[150px]"
    />
  </div>
</div>`}
      >
        <div className="grid w-full gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="small">Small textarea</Label>
            <Textarea 
              placeholder="Small size..." 
              id="small"
              className="min-h-[60px]"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="medium">Medium textarea</Label>
            <Textarea 
              placeholder="Medium size..." 
              id="medium"
              className="min-h-[100px]"
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="large">Large textarea</Label>
            <Textarea 
              placeholder="Large size..." 
              id="large"
              className="min-h-[150px]"
            />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Form Textarea"
        description="Textarea in a form context"
        code={`<form className="space-y-4">
  <div className="grid w-full gap-1.5">
    <Label htmlFor="subject">Subject</Label>
    <input 
      type="text" 
      id="subject"
      placeholder="Enter subject"
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
  <div className="grid w-full gap-1.5">
    <Label htmlFor="feedback">Feedback</Label>
    <Textarea 
      placeholder="Share your feedback..."
      id="feedback"
      className="min-h-[120px]"
    />
  </div>
  <div className="flex gap-2">
    <Button type="submit">Submit</Button>
    <Button type="button" variant="outline">Cancel</Button>
  </div>
</form>`}
      >
        <form className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <input 
              type="text" 
              id="subject"
              placeholder="Enter subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea 
              placeholder="Share your feedback..."
              id="feedback"
              className="min-h-[120px]"
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline">Cancel</Button>
          </div>
        </form>
      </PreviewCard>
    </ComponentSection>
  );
}