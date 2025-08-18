import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SwitchPreview() {
  return (
    <ComponentSection title="Switch">
      <PreviewCard
        title="Basic Switch"
        description="Simple switch component with label"
        code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Default Checked Switch"
        description="Switch with default checked state"
        code={`<div className="flex items-center space-x-2">
  <Switch id="notifications" defaultChecked />
  <Label htmlFor="notifications">Enable Notifications</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Switch id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Disabled Switch"
        description="Switch in disabled state"
        code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off">Disabled (Off)</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled defaultChecked />
    <Label htmlFor="disabled-on">Disabled (On)</Label>
  </div>
</div>`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off">Disabled (Off)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-on" disabled defaultChecked />
            <Label htmlFor="disabled-on">Disabled (On)</Label>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Switch with Description"
        description="Switch with additional description text"
        code={`<div className="flex items-start space-x-3">
  <Switch id="marketing" className="mt-1" />
  <div className="space-y-1">
    <Label htmlFor="marketing" className="text-sm font-medium">
      Marketing emails
    </Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
</div>`}
      >
        <div className="flex items-start space-x-3">
          <Switch id="marketing" className="mt-1" />
          <div className="space-y-1">
            <Label htmlFor="marketing" className="text-sm font-medium">
              Marketing emails
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products, features, and more.
            </p>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Settings List"
        description="Multiple switches for settings"
        code={`<div className="space-y-6">
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="push-notifications">Push Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Send notifications to device
      </p>
    </div>
    <Switch id="push-notifications" />
  </div>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="email-notifications">Email Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Receive notifications via email
      </p>
    </div>
    <Switch id="email-notifications" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="sms-notifications">SMS Notifications</Label>
      <p className="text-sm text-muted-foreground">
        Receive notifications via SMS
      </p>
    </div>
    <Switch id="sms-notifications" />
  </div>
</div>`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send notifications to device
              </p>
            </div>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via SMS
              </p>
            </div>
            <Switch id="sms-notifications" />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Compact Switch List"
        description="Compact list of switches"
        code={`<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Switch id="auto-save" defaultChecked />
    <Label htmlFor="auto-save">Auto-save</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="dark-mode" />
    <Label htmlFor="dark-mode">Dark mode</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="sound-effects" defaultChecked />
    <Label htmlFor="sound-effects">Sound effects</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="animations" defaultChecked />
    <Label htmlFor="animations">Animations</Label>
  </div>
</div>`}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="auto-save" defaultChecked />
            <Label htmlFor="auto-save">Auto-save</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">Dark mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sound-effects" defaultChecked />
            <Label htmlFor="sound-effects">Sound effects</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="animations" defaultChecked />
            <Label htmlFor="animations">Animations</Label>
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}