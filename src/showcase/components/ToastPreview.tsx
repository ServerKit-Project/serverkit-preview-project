import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function ToastPreview() {
  const { toast } = useToast();

  return (
    <ComponentSection title="Toast">
      <PreviewCard
        title="Basic Toast"
        description="Simple toast notification using useToast hook"
        code={`import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

<Button
  onClick={() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  }}
>
  Show Toast
</Button>`}
      >
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Success Toast"
        description="Toast notification for success actions"
        code={`<Button
  onClick={() => {
    toast({
      title: "Success!",
      description: "Your changes have been saved successfully.",
      variant: "default",
    });
  }}
>
  Success Toast
</Button>`}
      >
        <Button
          onClick={() => {
            toast({
              title: "Success!",
              description: "Your changes have been saved successfully.",
              variant: "default",
            });
          }}
        >
          Success Toast
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Destructive Toast"
        description="Toast notification for errors or destructive actions"
        code={`<Button
  variant="destructive"
  onClick={() => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }}
>
  Error Toast
</Button>`}
      >
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            });
          }}
        >
          Error Toast
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Toast with Action"
        description="Toast with an action button"
        code={`<Button
  onClick={() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  }}
>
  Toast with Action
</Button>`}
      >
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up", 
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
            });
          }}
        >
          Toast with Action
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Simple Toast"
        description="Toast with just a title"
        code={`<Button
  variant="outline"
  onClick={() => {
    toast({
      description: "Your message has been sent.",
    });
  }}
>
  Simple Toast
</Button>`}
      >
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: "Your message has been sent.",
            });
          }}
        >
          Simple Toast
        </Button>
      </PreviewCard>

      <PreviewCard
        title="Multiple Toasts"
        description="Trigger multiple toast notifications"
        code={`<div className="flex gap-2">
  <Button
    onClick={() => {
      toast({
        title: "First notification",
        description: "This is the first toast message.",
      });
      
      setTimeout(() => {
        toast({
          title: "Second notification", 
          description: "This is the second toast message.",
        });
      }, 1000);
      
      setTimeout(() => {
        toast({
          title: "Third notification",
          description: "This is the third toast message.",
        });
      }, 2000);
    }}
  >
    Multiple Toasts
  </Button>
</div>`}
      >
        <div className="flex gap-2">
          <Button
            onClick={() => {
              toast({
                title: "First notification",
                description: "This is the first toast message.",
              });
              
              setTimeout(() => {
                toast({
                  title: "Second notification", 
                  description: "This is the second toast message.",
                });
              }, 1000);
              
              setTimeout(() => {
                toast({
                  title: "Third notification",
                  description: "This is the third toast message.",
                });
              }, 2000);
            }}
          >
            Multiple Toasts
          </Button>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}