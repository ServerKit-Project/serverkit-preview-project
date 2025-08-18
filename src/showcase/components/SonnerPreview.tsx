import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SonnerPreview() {
  return (
    <ComponentSection title="Sonner">
      <PreviewCard
        title="Basic Toast"
        description="Simple toast notifications using Sonner"
        code={`import { toast } from "sonner";

<div className="flex flex-wrap gap-2">
  <Button onClick={() => toast("Event has been created")}>
    Basic Toast
  </Button>
  <Button onClick={() => toast.success("Event has been created")}>
    Success Toast
  </Button>
  <Button onClick={() => toast.error("Event could not be created")}>
    Error Toast
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast("Event has been created")}>
            Basic Toast
          </Button>
          <Button onClick={() => toast.success("Event has been created")}>
            Success Toast
          </Button>
          <Button onClick={() => toast.error("Event could not be created")}>
            Error Toast
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toast with Description"
        description="Toasts with additional description text"
        code={`<div className="flex flex-wrap gap-2">
  <Button 
    onClick={() => 
      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      })
    }
  >
    With Description
  </Button>
  <Button 
    onClick={() => 
      toast.success("Payment processed", {
        description: "Your payment has been successfully processed.",
      })
    }
  >
    Success with Description
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button 
            onClick={() => 
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
              })
            }
          >
            With Description
          </Button>
          <Button 
            onClick={() => 
              toast.success("Payment processed", {
                description: "Your payment has been successfully processed.",
              })
            }
          >
            Success with Description
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Toast with Action"
        description="Toasts with action buttons"
        code={`<div className="flex flex-wrap gap-2">
  <Button
    onClick={() =>
      toast("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  >
    With Action
  </Button>
  <Button
    onClick={() =>
      toast.error("Something went wrong", {
        action: {
          label: "Retry",
          onClick: () => console.log("Retry"),
        },
      })
    }
  >
    Error with Action
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() =>
              toast("Event has been created", {
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            With Action
          </Button>
          <Button
            onClick={() =>
              toast.error("Something went wrong", {
                action: {
                  label: "Retry",
                  onClick: () => console.log("Retry"),
                },
              })
            }
          >
            Error with Action
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Different Toast Types"
        description="Various types of toast notifications"
        code={`<div className="flex flex-wrap gap-2">
  <Button onClick={() => toast.info("Info message")}>
    Info Toast
  </Button>
  <Button onClick={() => toast.warning("Warning message")}>
    Warning Toast
  </Button>
  <Button onClick={() => toast.loading("Loading...")}>
    Loading Toast
  </Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast.info("Info message")}>
            Info Toast
          </Button>
          <Button onClick={() => toast.warning("Warning message")}>
            Warning Toast
          </Button>
          <Button onClick={() => toast.loading("Loading...")}>
            Loading Toast
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Promise Toast"
        description="Toast that updates based on promise resolution"
        code={`<Button
  onClick={() => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        return \`Data has been loaded\`;
      },
      error: 'Error',
    });
  }}
>
  Promise Toast
</Button>`}
      >
        <Button
          onClick={() => {
            const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
            
            toast.promise(promise, {
              loading: 'Loading...',
              success: (data) => {
                return `Data has been loaded`;
              },
              error: 'Error',
            });
          }}
        >
          Promise Toast
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Custom Toast"
        description="Toast with custom JSX content"
        code={`<Button
  onClick={() =>
    toast(
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-green-500 rounded-full" />
        <span>Custom toast with JSX content</span>
      </div>
    )
  }
>
  Custom Toast
</Button>`}
      >
        <Button
          onClick={() =>
            toast(
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <span>Custom toast with JSX content</span>
              </div>
            )
          }
        >
          Custom Toast
        </Button>
      </PreviewCard>
    </ComponentSection>
  );
}