import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle, CheckCircle, Info } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function AlertPreview() {
  return (
    <ComponentSection title="Alert">
      <PreviewCard
        title="Default Alert"
        description="A basic alert with title and description"
        code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
      >
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </PreviewCard>

      <PreviewCard
        title="Destructive Alert"
        description="Alert with destructive variant for errors"
        code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </PreviewCard>

      <PreviewCard
        title="Success Alert"
        description="Alert styled for success messages"
        code={`<Alert className="border-green-200 bg-green-50 text-green-800">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="border-green-200 bg-green-50 text-green-800">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </PreviewCard>

      <PreviewCard
        title="Info Alert"
        description="Alert styled for informational messages"
        code={`<Alert className="border-blue-200 bg-blue-50 text-blue-800">
  <Info className="h-4 w-4 text-blue-600" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This feature is currently in beta. Please report any issues.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="border-blue-200 bg-blue-50 text-blue-800">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This feature is currently in beta. Please report any issues.
          </AlertDescription>
        </Alert>
      </PreviewCard>

      <PreviewCard
        title="Simple Alert"
        description="Alert with description only"
        code={`<Alert>
  <AlertDescription>
    A simple alert with just a description.
  </AlertDescription>
</Alert>`}
      >
        <Alert>
          <AlertDescription>
            A simple alert with just a description.
          </AlertDescription>
        </Alert>
      </PreviewCard>
    </ComponentSection>
  );
}