import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function ToasterPreview() {
  const { toast } = useToast();

  return (
    <ComponentSection title="Toaster">
      <PreviewCard
        title="Toaster Container"
        description="The Toaster component provides the container for displaying toast notifications"
        code={`import { Toaster } from "@/components/ui/toaster";

// Add this to your root layout or app component
<Toaster />

// Then use the useToast hook anywhere in your app
const { toast } = useToast();

<Button
  onClick={() => {
    toast({
      title: "Toast notification",
      description: "This toast is rendered by the Toaster component.",
    });
  }}
>
  Show Toast
</Button>`}
      >
        <div className="space-y-4">
          <div className="p-4 border rounded-md bg-muted/30">
            <p className="text-sm text-muted-foreground mb-2">
              The Toaster component is already included in your app root. 
              Click the button below to see it in action:
            </p>
            <Button
              onClick={() => {
                toast({
                  title: "Toast notification",
                  description: "This toast is rendered by the Toaster component.",
                });
              }}
            >
              Show Toast
            </Button>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toaster Positioning"
        description="The Toaster automatically positions toasts in the bottom-right corner"
        code={`// The Toaster component automatically handles:
// - Positioning (bottom-right by default)
// - Stacking multiple toasts
// - Auto-dismiss timing
// - Animation transitions
// - Accessibility features

<Button
  onClick={() => {
    // Show multiple toasts to demonstrate stacking
    toast({ description: "First toast" });
    setTimeout(() => toast({ description: "Second toast" }), 500);
    setTimeout(() => toast({ description: "Third toast" }), 1000);
  }}
>
  Show Multiple Toasts
</Button>`}
      >
        <Button
          onClick={() => {
            toast({ description: "First toast" });
            setTimeout(() => toast({ description: "Second toast" }), 500);
            setTimeout(() => toast({ description: "Third toast" }), 1000);
          }}
        >
          Show Multiple Toasts
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Toast Variants"
        description="Toaster supports different toast variants"
        code={`<div className="flex flex-wrap gap-2">
  <Button
    onClick={() => {
      toast({
        title: "Default toast",
        description: "This is a default toast notification.",
      });
    }}
  >
    Default
  </Button>
  
  <Button
    variant="destructive"
    onClick={() => {
      toast({
        variant: "destructive",
        title: "Error toast",
        description: "This is an error toast notification.",
      });
    }}
  >
    Destructive
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              toast({
                title: "Default toast",
                description: "This is a default toast notification.",
              });
            }}
          >
            Default
          </Button>
          
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Error toast",
                description: "This is an error toast notification.",
              });
            }}
          >
            Destructive
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toast Configuration"
        description="Configure toast duration and behavior"
        code={`// Long-lasting toast
<Button
  onClick={() => {
    toast({
      title: "Long toast",
      description: "This toast will stay for 10 seconds.",
      duration: 10000, // 10 seconds
    });
  }}
>
  Long Duration Toast
</Button>

// Persistent toast (no auto-dismiss)
<Button
  onClick={() => {
    toast({
      title: "Persistent toast",
      description: "This toast won't auto-dismiss.",
      duration: Infinity,
    });
  }}
>
  Persistent Toast
</Button>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              toast({
                title: "Long toast",
                description: "This toast will stay for 10 seconds.",
                duration: 10000,
              });
            }}
          >
            Long Duration
          </Button>
          
          <Button
            onClick={() => {
              toast({
                title: "Persistent toast",
                description: "This toast won't auto-dismiss.",
                duration: Infinity,
              });
            }}
          >
            Persistent
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Integration Notes"
        description="Important notes about using the Toaster component"
        code={`// 1. Add Toaster to your root layout (usually in layout.tsx or App.tsx):
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

// 2. Use the useToast hook in any component:
import { useToast } from "@/hooks/use-toast";

function MyComponent() {
  const { toast } = useToast();
  
  return (
    <Button onClick={() => toast({ title: "Hello!" })}>
      Show Toast
    </Button>
  );
}`}
      >
        <div className="p-4 border rounded-md bg-muted/30">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong>Setup:</strong> The Toaster component should be added to your root layout once.</p>
            <p><strong>Usage:</strong> Import and use the useToast hook in any component to show toasts.</p>
            <p><strong>Features:</strong> Automatic positioning, stacking, timing, and accessibility support.</p>
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}