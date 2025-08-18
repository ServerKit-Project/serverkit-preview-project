import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Settings, User, Calendar, ChevronUp } from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SidebarPreview() {
  return (
    <ComponentSection title="Sidebar">
      <PreviewCard
        title="Basic Sidebar"
        description="Simple sidebar with navigation items"
        code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="p-2">
        <h2 className="text-lg font-semibold">My App</h2>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-4 w-4" />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <User className="h-4 w-4" />
            <span>John Doe</span>
            <ChevronUp className="ml-auto h-4 w-4" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
  <main className="flex-1 p-4">
    <SidebarTrigger />
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Main Content</h1>
      <p className="text-muted-foreground">
        This is the main content area. Click the trigger to toggle the sidebar.
      </p>
    </div>
  </main>
</SidebarProvider>`}
      >
        <div className="h-[400px] w-full border rounded-md overflow-hidden">
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <div className="p-2">
                  <h2 className="text-lg font-semibold">My App</h2>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Calendar className="h-4 w-4" />
                          <span>Calendar</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <User className="h-4 w-4" />
                      <span>John Doe</span>
                      <ChevronUp className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </Sidebar>
            <main className="flex-1 p-4">
              <SidebarTrigger />
              <div className="mt-4">
                <h1 className="text-2xl font-bold">Main Content</h1>
                <p className="text-muted-foreground">
                  This is the main content area. Click the trigger to toggle the sidebar.
                </p>
              </div>
            </main>
          </SidebarProvider>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Sidebar with Groups"
        description="Sidebar with multiple grouped sections"
        code={`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <div className="p-2">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Overview</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar className="h-4 w-4" />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="h-4 w-4" />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <main className="flex-1 p-4">
    <SidebarTrigger />
    <div className="mt-4">
      <p className="text-muted-foreground">
        Sidebar with grouped navigation items.
      </p>
    </div>
  </main>
</SidebarProvider>`}
      >
        <div className="h-[350px] w-full border rounded-md overflow-hidden">
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <div className="p-2">
                  <h2 className="text-lg font-semibold">Dashboard</h2>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Main</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Overview</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Calendar className="h-4 w-4" />
                          <span>Analytics</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Account</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-4">
              <SidebarTrigger />
              <div className="mt-4">
                <p className="text-muted-foreground">
                  Sidebar with grouped navigation items.
                </p>
              </div>
            </main>
          </SidebarProvider>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Compact Sidebar"
        description="Minimal sidebar layout"
        code={`<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <main className="flex-1 p-4">
    <SidebarTrigger />
    <div className="mt-4">
      <p className="text-muted-foreground">
        Compact sidebar without header or footer.
      </p>
    </div>
  </main>
</SidebarProvider>`}
      >
        <div className="h-[250px] w-full border rounded-md overflow-hidden">
          <SidebarProvider>
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-4">
              <SidebarTrigger />
              <div className="mt-4">
                <p className="text-muted-foreground">
                  Compact sidebar without header or footer.
                </p>
              </div>
            </main>
          </SidebarProvider>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}