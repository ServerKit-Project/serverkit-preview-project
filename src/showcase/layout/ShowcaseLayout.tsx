import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

// Component list for navigation
export const componentList = [
  { name: "Accordion", path: "accordion" },
  { name: "Alert Dialog", path: "alert-dialog" },
  { name: "Alert", path: "alert" },
  { name: "Aspect Ratio", path: "aspect-ratio" },
  { name: "Avatar", path: "avatar" },
  { name: "Badge", path: "badge" },
  { name: "Breadcrumb", path: "breadcrumb" },
  { name: "Button", path: "button" },
  { name: "Calendar", path: "calendar" },
  { name: "Carousel", path: "carousel" },
  { name: "Checkbox", path: "checkbox" },
  { name: "Collapsible", path: "collapsible" },
  { name: "Command", path: "command" },
  { name: "Context Menu", path: "context-menu" },
  { name: "Dialog", path: "dialog" },
  { name: "Drawer", path: "drawer" },
  { name: "Dropdown Menu", path: "dropdown-menu" },
  { name: "Hover Card", path: "hover-card" },
  { name: "Input", path: "input" },
  { name: "Menubar", path: "menubar" },
  { name: "Navigation Menu", path: "navigation-menu" },
  { name: "Pagination", path: "pagination" },
  { name: "Popover", path: "popover" },
  { name: "Progress", path: "progress" },
  { name: "Radio Group", path: "radio-group" },
  { name: "Resizable", path: "resizable" },
  { name: "Scroll Area", path: "scroll-area" },
  { name: "Select", path: "select" },
  { name: "Separator", path: "separator" },
  { name: "Sheet", path: "sheet" },
  { name: "Sidebar", path: "sidebar" },
  { name: "Skeleton", path: "skeleton" },
  { name: "Slider", path: "slider" },
  { name: "Sonner", path: "sonner" },
  { name: "Switch", path: "switch" },
  { name: "Tabs", path: "tabs" },
  { name: "Textarea", path: "textarea" },
  { name: "Toast", path: "toast" },
  { name: "Toaster", path: "toaster" },
  { name: "Toggle Group", path: "toggle-group" },
  { name: "Toggle", path: "toggle" },
  { name: "Tooltip", path: "tooltip" },
];

export default function ShowcaseLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  
  // Find current component index
  const currentIndex = componentList.findIndex(c => c.path === currentPath);
  const prevComponent = currentIndex > 0 ? componentList[currentIndex - 1] : null;
  const nextComponent = currentIndex < componentList.length - 1 ? componentList[currentIndex + 1] : null;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <Link to="/showcase">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Home className="h-4 w-4" />
              Component Showcase
            </h2>
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-73px)]">
          <div className="p-4 space-y-1">
            {componentList.map((component) => (
              <Link
                key={component.path}
                to={`/showcase/${component.path}`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  currentPath === component.path && "bg-accent text-accent-foreground font-medium"
                )}
              >
                {component.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="border-b p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {prevComponent && (
              <Link to={`/showcase/${prevComponent.path}`}>
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {prevComponent.name}
                </Button>
              </Link>
            )}
          </div>
          <div className="flex items-center gap-2">
            {nextComponent && (
              <Link to={`/showcase/${nextComponent.path}`}>
                <Button variant="outline" size="sm">
                  {nextComponent.name}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <div className="p-8">
            <Outlet />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}