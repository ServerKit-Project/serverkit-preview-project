import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function ProgressPreview() {
  const [progress, setProgress] = useState(13);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const resetProgress = () => {
    setProgress(0);
    setTimeout(() => setProgress(66), 100);
  };

  return (
    <ComponentSection title="Progress">
      <PreviewCard
        title="Basic Progress"
        description="Simple progress bar showing completion percentage"
        code={`const [progress, setProgress] = useState(13);

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

<Progress value={progress} className="w-[60%]" />`}
      >
        <div className="space-y-4">
          <Progress value={progress} className="w-[60%]" />
          <Button onClick={resetProgress} variant="outline" size="sm">
            Reset Progress
          </Button>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Different Progress Values"
        description="Progress bars with various completion percentages"
        code={`<div className="space-y-4 w-full max-w-md">
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Loading...</span>
      <span>25%</span>
    </div>
    <Progress value={25} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Downloading...</span>
      <span>50%</span>
    </div>
    <Progress value={50} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Installing...</span>
      <span>75%</span>
    </div>
    <Progress value={75} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Complete!</span>
      <span>100%</span>
    </div>
    <Progress value={100} />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Loading...</span>
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Downloading...</span>
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Installing...</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Complete!</span>
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Animated Progress"
        description="Progress bar with continuous animation"
        code={`const [animatedProgress, setAnimatedProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setAnimatedProgress((prev) => {
      if (prev >= 100) return 0;
      return prev + 1;
    });
  }, 50);
  return () => clearInterval(timer);
}, []);

<div className="space-y-2 w-full max-w-md">
  <div className="flex justify-between text-sm">
    <span>Processing...</span>
    <span>{Math.round(animatedProgress)}%</span>
  </div>
  <Progress value={animatedProgress} />
</div>`}
      >
        <div className="space-y-2 w-full max-w-md">
          <div className="flex justify-between text-sm">
            <span>Processing...</span>
            <span>{Math.round(animatedProgress)}%</span>
          </div>
          <Progress value={animatedProgress} />
        </div>
      </PreviewCard>

      <PreviewCard
        title="Colored Progress Bars"
        description="Progress bars with custom colors"
        code={`<div className="space-y-4 w-full max-w-md">
  <div className="space-y-2">
    <span className="text-sm">Success (Green)</span>
    <Progress value={85} className="[&>div]:bg-green-500" />
  </div>
  <div className="space-y-2">
    <span className="text-sm">Warning (Yellow)</span>
    <Progress value={60} className="[&>div]:bg-yellow-500" />
  </div>
  <div className="space-y-2">
    <span className="text-sm">Error (Red)</span>
    <Progress value={30} className="[&>div]:bg-red-500" />
  </div>
  <div className="space-y-2">
    <span className="text-sm">Info (Blue)</span>
    <Progress value={70} className="[&>div]:bg-blue-500" />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-md">
          <div className="space-y-2">
            <span className="text-sm">Success (Green)</span>
            <Progress value={85} className="[&>div]:bg-green-500" />
          </div>
          <div className="space-y-2">
            <span className="text-sm">Warning (Yellow)</span>
            <Progress value={60} className="[&>div]:bg-yellow-500" />
          </div>
          <div className="space-y-2">
            <span className="text-sm">Error (Red)</span>
            <Progress value={30} className="[&>div]:bg-red-500" />
          </div>
          <div className="space-y-2">
            <span className="text-sm">Info (Blue)</span>
            <Progress value={70} className="[&>div]:bg-blue-500" />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Small Progress Bars"
        description="Compact progress bars for smaller spaces"
        code={`<div className="space-y-3 w-full max-w-sm">
  <div className="space-y-1">
    <span className="text-xs text-muted-foreground">Small Progress</span>
    <Progress value={45} className="h-2" />
  </div>
  <div className="space-y-1">
    <span className="text-xs text-muted-foreground">Mini Progress</span>
    <Progress value={80} className="h-1" />
  </div>
</div>`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Small Progress</span>
            <Progress value={45} className="h-2" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Mini Progress</span>
            <Progress value={80} className="h-1" />
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}