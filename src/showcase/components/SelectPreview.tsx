import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function SelectPreview() {
  return (
    <ComponentSection title="Select">
      <PreviewCard
        title="Basic Select"
        description="Simple select dropdown with options"
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </PreviewCard>

      <PreviewCard
        title="Select with Groups"
        description="Select with grouped options for better organization"
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="node">Node.js</SelectItem>
      <SelectItem value="deno">Deno</SelectItem>
      <SelectItem value="python">Python</SelectItem>
      <SelectItem value="go">Go</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="deno">Deno</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </PreviewCard>

      <PreviewCard
        title="Select with Disabled Items"
        description="Select with some disabled options"
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active">Active</SelectItem>
    <SelectItem value="inactive">Inactive</SelectItem>
    <SelectItem value="pending">Pending</SelectItem>
    <SelectItem value="suspended" disabled>
      Suspended (Disabled)
    </SelectItem>
    <SelectItem value="archived" disabled>
      Archived (Disabled)
    </SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="suspended" disabled>
              Suspended (Disabled)
            </SelectItem>
            <SelectItem value="archived" disabled>
              Archived (Disabled)
            </SelectItem>
          </SelectContent>
        </Select>
      </PreviewCard>

      <PreviewCard
        title="Select with Default Value"
        description="Select with a pre-selected default option"
        code={`<Select defaultValue="medium">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="small">Small</SelectItem>
    <SelectItem value="medium">Medium</SelectItem>
    <SelectItem value="large">Large</SelectItem>
    <SelectItem value="xl">Extra Large</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select defaultValue="medium">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
            <SelectItem value="xl">Extra Large</SelectItem>
          </SelectContent>
        </Select>
      </PreviewCard>

      <PreviewCard
        title="Disabled Select"
        description="Select in disabled state"
        code={`<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Disabled select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </PreviewCard>

      <PreviewCard
        title="Wide Select"
        description="Select with wider trigger width"
        code={`<Select>
  <SelectTrigger className="w-[300px]">
    <SelectValue placeholder="Select your preferred programming language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="javascript">JavaScript</SelectItem>
    <SelectItem value="typescript">TypeScript</SelectItem>
    <SelectItem value="python">Python</SelectItem>
    <SelectItem value="java">Java</SelectItem>
    <SelectItem value="csharp">C#</SelectItem>
    <SelectItem value="go">Go</SelectItem>
    <SelectItem value="rust">Rust</SelectItem>
    <SelectItem value="php">PHP</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Select your preferred programming language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
            <SelectItem value="go">Go</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="php">PHP</SelectItem>
          </SelectContent>
        </Select>
      </PreviewCard>
    </ComponentSection>
  );
}