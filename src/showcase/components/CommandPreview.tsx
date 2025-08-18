import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { PreviewCard, ComponentSection } from "../utils/PreviewCard";

export default function CommandPreview() {
  return (
    <ComponentSection title="Command">
      <PreviewCard
        title="Basic Command Menu"
        description="A command menu with search and grouped items"
        code={`<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      >
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PreviewCard>

      <PreviewCard
        title="Simple Command List"
        description="Minimal command menu without search"
        code={`<Command className="rounded-lg border shadow-md max-w-md">
  <CommandList>
    <CommandGroup>
      <CommandItem>
        <span>New File</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span>Open File</span>
        <CommandShortcut>⌘O</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span>Save</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <span>Save As</span>
        <CommandShortcut>⇧⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      >
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandList>
            <CommandGroup>
              <CommandItem>
                <span>New File</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Open File</span>
                <CommandShortcut>⌘O</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Save</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Save As</span>
                <CommandShortcut>⇧⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PreviewCard>

      <PreviewCard
        title="Search with Multiple Groups"
        description="Command menu with search and multiple categorized groups"
        code={`<Command className="rounded-lg border shadow-md max-w-md">
  <CommandInput placeholder="Search files and commands..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Recent Files">
      <CommandItem>
        <span>document.pdf</span>
      </CommandItem>
      <CommandItem>
        <span>presentation.pptx</span>
      </CommandItem>
      <CommandItem>
        <span>spreadsheet.xlsx</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Actions">
      <CommandItem>
        <span>Create New Document</span>
      </CommandItem>
      <CommandItem>
        <span>Upload Files</span>
      </CommandItem>
      <CommandItem>
        <span>Share Folder</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Tools">
      <CommandItem>
        <span>PDF Converter</span>
      </CommandItem>
      <CommandItem>
        <span>Image Editor</span>
      </CommandItem>
      <CommandItem>
        <span>Text Formatter</span>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      >
        <Command className="rounded-lg border shadow-md max-w-md">
          <CommandInput placeholder="Search files and commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Recent Files">
              <CommandItem>
                <span>document.pdf</span>
              </CommandItem>
              <CommandItem>
                <span>presentation.pptx</span>
              </CommandItem>
              <CommandItem>
                <span>spreadsheet.xlsx</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <span>Create New Document</span>
              </CommandItem>
              <CommandItem>
                <span>Upload Files</span>
              </CommandItem>
              <CommandItem>
                <span>Share Folder</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tools">
              <CommandItem>
                <span>PDF Converter</span>
              </CommandItem>
              <CommandItem>
                <span>Image Editor</span>
              </CommandItem>
              <CommandItem>
                <span>Text Formatter</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PreviewCard>
    </ComponentSection>
  );
}