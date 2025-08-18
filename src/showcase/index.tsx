import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { componentList } from "./layout/ShowcaseLayout";

// Categories for components
const categories = {
  "Inputs": ["button", "input", "textarea", "checkbox", "switch", "radio-group", "slider", "toggle", "toggle-group"],
  "Layout": ["separator", "resizable", "scroll-area", "aspect-ratio", "sidebar"],
  "Overlays": ["dialog", "alert-dialog", "sheet", "drawer", "popover", "tooltip", "hover-card"],
  "Navigation": ["breadcrumb", "navigation-menu", "menubar", "pagination", "tabs", "carousel"],
  "Data Display": ["avatar", "badge", "calendar", "progress", "skeleton", "alert"],
  "Complex": ["command", "select", "dropdown-menu", "context-menu", "collapsible"],
  "Feedback": ["toast", "toaster", "sonner"]
};

// Get category for a component
function getComponentCategory(path: string): string {
  for (const [category, components] of Object.entries(categories)) {
    if (components.includes(path)) {
      return category;
    }
  }
  return "Other";
}

export default function ShowcaseIndex() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
          <p className="text-lg text-muted-foreground">
            Explore all UI components in the library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {componentList.map((component) => {
            const category = getComponentCategory(component.path);
            return (
              <Link
                key={component.path}
                to={`/showcase/${component.path}`}
                className="block transition-transform hover:scale-105"
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      Click to view examples and variations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-20 border rounded-md bg-muted/20">
                      <span className="text-muted-foreground text-sm">Preview</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}