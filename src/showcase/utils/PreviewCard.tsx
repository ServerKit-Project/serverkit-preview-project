import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PreviewCardProps {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "minimal";
}

export function PreviewCard({
  title,
  description,
  code,
  children,
  className,
  variant = "default"
}: PreviewCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === "minimal") {
    return (
      <div className={cn("space-y-3", className)}>
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div className="p-6 border rounded-lg bg-background">
          {children}
        </div>
        {code && (
          <div className="relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm">{code}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && (
              <CardDescription className="mt-2">{description}</CardDescription>
            )}
          </div>
          {code && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="p-6 border rounded-lg bg-background/50">
          {children}
        </div>
        {code && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Code</Badge>
            </div>
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code className="text-sm">{code}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Component section header
export function ComponentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="mt-1 h-1 w-20 bg-primary rounded" />
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}