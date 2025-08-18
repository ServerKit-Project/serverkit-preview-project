import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Eye, EyeOff } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function InputPreview() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ComponentSection title="Input">
      <PreviewCard
        title="Basic Input"
        description="Simple input field with label"
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Input with Text"
        description="Input field with description text"
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-2">Email</Label>
  <Input type="email" id="email-2" placeholder="Email" />
  <p className="text-sm text-muted-foreground">Enter your email address.</p>
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email-2">Email</Label>
          <Input type="email" id="email-2" placeholder="Email" />
          <p className="text-sm text-muted-foreground">Enter your email address.</p>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Input with Button"
        description="Input field with an attached button"
        code={`<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Search Input"
        description="Input field styled for search with icon"
        code={`<div className="relative w-full max-w-sm">
  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input
    type="search"
    placeholder="Search..."
    className="pl-8"
  />
</div>`}
      >
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8"
          />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Password Input"
        description="Password input with show/hide toggle"
        code={`const [showPassword, setShowPassword] = useState(false);

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="password">Password</Label>
  <div className="relative">
    <Input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      className="pr-10"
    />
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </Button>
  </div>
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled Input"
        description="Input in disabled state"
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="disabled">Disabled Input</Label>
  <Input id="disabled" disabled type="email" placeholder="Email" />
</div>`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="disabled">Disabled Input</Label>
          <Input id="disabled" disabled type="email" placeholder="Email" />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Input Types"
        description="Different input types"
        code={`<div className="grid w-full max-w-sm gap-4">
  <div className="space-y-2">
    <Label htmlFor="text">Text</Label>
    <Input id="text" type="text" placeholder="Enter text" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="number">Number</Label>
    <Input id="number" type="number" placeholder="Enter number" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="date">Date</Label>
    <Input id="date" type="date" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="time">Time</Label>
    <Input id="time" type="time" />
  </div>
</div>`}
      >
        <div className="grid w-full max-w-sm gap-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input id="text" type="text" placeholder="Enter text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="number" placeholder="Enter number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" />
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}