import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SkeletonPreview() {
  return (
    <ComponentSection title="Skeleton">
      <PreviewCard
        title="Basic Skeleton"
        description="Simple skeleton loading placeholder"
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Card Skeleton"
        description="Skeleton for a card component layout"
        code={`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="List Skeleton"
        description="Skeleton for list items"
        code={`<div className="space-y-4">
  {Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[200px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  ))}
</div>`}
      >
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[200px]" />
                <Skeleton className="h-3 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </PreviewCard>

      <PreviewCard
        title="Article Skeleton"
        description="Skeleton for article or blog post layout"
        code={`<div className="space-y-4 max-w-md">
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="h-40 w-full rounded-md" />
  <div className="space-y-2">
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-3/4" />
  </div>
  <div className="flex space-x-2">
    <Skeleton className="h-8 w-20 rounded-md" />
    <Skeleton className="h-8 w-16 rounded-md" />
  </div>
</div>`}
      >
        <div className="space-y-4 max-w-md">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-40 w-full rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-16 rounded-md" />
          </div>
        </div>
      </PreviewCard>

      <PreviewCard
        title="Table Skeleton"
        description="Skeleton for table rows"
        code={`<div className="space-y-2">
  <div className="flex space-x-4 pb-2 border-b">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[80px]" />
    <Skeleton className="h-4 w-[60px]" />
  </div>
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex space-x-4 py-2">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[80px]" />
      <Skeleton className="h-4 w-[60px]" />
    </div>
  ))}
</div>`}
      >
        <div className="space-y-2">
          <div className="flex space-x-4 pb-2 border-b">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-4 w-[60px]" />
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex space-x-4 py-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-4 w-[60px]" />
            </div>
          ))}
        </div>
      </PreviewCard>

      <PreviewCard
        title="Dashboard Skeleton"
        description="Skeleton for dashboard widgets"
        code={`<div className="grid grid-cols-2 gap-4 max-w-lg">
  <div className="space-y-2 p-4 border rounded-lg">
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-8 w-16" />
    <Skeleton className="h-2 w-full" />
  </div>
  <div className="space-y-2 p-4 border rounded-lg">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-8 w-20" />
    <Skeleton className="h-2 w-full" />
  </div>
  <div className="col-span-2 space-y-2 p-4 border rounded-lg">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-20 w-full" />
  </div>
</div>`}
      >
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-2 p-4 border rounded-lg">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-2 p-4 border rounded-lg">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="col-span-2 space-y-2 p-4 border rounded-lg">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </PreviewCard>
    </ComponentSection>
  );
}