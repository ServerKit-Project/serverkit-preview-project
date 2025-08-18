import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowRight, Loader2, Heart } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function ButtonPreview() {
  return (
    <ComponentSection title="Button">
      <PreviewCard
        title="Button Variants"
        description="Different button variants for various use cases"
        code={`<div className="flex flex-wrap gap-4">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Button Sizes"
        description="Buttons in different sizes"
        code={`<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <Heart className="h-4 w-4" />
  </Button>
</div>`}
      >
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Buttons with Icons"
        description="Buttons with leading and trailing icons"
        code={`<div className="flex flex-wrap gap-4">
  <Button>
    <Mail className="mr-2 h-4 w-4" />
    Login with Email
  </Button>
  <Button>
    Download
    <Download className="ml-2 h-4 w-4" />
  </Button>
  <Button variant="outline">
    Continue
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button>
            Download
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Loading Button"
        description="Button with loading state"
        code={`<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
      >
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Disabled States"
        description="Buttons in disabled state"
        code={`<div className="flex flex-wrap gap-4">
  <Button disabled>Default</Button>
  <Button variant="secondary" disabled>Secondary</Button>
  <Button variant="destructive" disabled>Destructive</Button>
  <Button variant="outline" disabled>Outline</Button>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="As Child"
        description="Button rendered as different elements using asChild"
        code={`<div className="flex flex-wrap gap-4">
  <Button asChild>
    <a href="/">Link Button</a>
  </Button>
  <Button asChild variant="outline">
    <a href="/docs">Documentation</a>
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>Link Button</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#" onClick={(e) => e.preventDefault()}>Documentation</a>
          </Button>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}