import type { Meta, StoryObj } from "@storybook/react"
import { Calendar, CalendarEvent } from "./Calendar"

const meta = {
  title: "components/Calendar",
  component: Calendar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "date",
      description: "Current selected date",
    },
    events: {
      description: "Array of calendar events",
    },
    showWeekNumbers: {
      control: "boolean",
      description: "Show week numbers",
    },
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

const sampleEvents: CalendarEvent[] = [
  {
    date: new Date(2025, 7, 1),
    title: "Team Meeting",
    type: "meeting",
  },
  {
    date: new Date(2025, 7, 5),
    title: "Project Deadline",
    type: "deadline",
  },
  {
    date: new Date(2025, 7, 8),
    title: "Conference Call",
    type: "call",
  },
  {
    date: new Date(2025, 7, 8),
    title: "Code Review",
    type: "review",
  },
  {
    date: new Date(2025, 7, 14),
    title: "Sprint Planning",
    type: "planning",
  },
  {
    date: new Date(2025, 7, 14),
    title: "Team Lunch",
    type: "social",
  },
  {
    date: new Date(2025, 7, 14),
    title: "Client Meeting",
    type: "meeting",
  },
  {
    date: new Date(2025, 7, 20),
    title: "Release Day",
    type: "release",
  },
  {
    date: new Date(2025, 7, 25),
    title: "Workshop",
    type: "training",
  },
  {
    date: new Date(2025, 7, 28),
    title: "Monthly Review",
    type: "review",
  },
]

export const Default: Story = {
  args: {
    value: new Date(2025, 7, 14),
  },
}

export const WithEvents: Story = {
  args: {
    value: new Date(2025, 7, 14),
    events: sampleEvents,
  },
}

export const CurrentMonth: Story = {
  args: {
    value: new Date(),
    events: [
      {
        date: new Date(),
        title: "Today's Event",
        type: "important",
      },
    ],
  },
}

export const ManyEvents: Story = {
  args: {
    value: new Date(2025, 8, 1),
    events: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2025, 8, (i % 30) + 1),
      title: `Event ${i + 1}`,
      type: i % 3 === 0 ? "meeting" : i % 3 === 1 ? "deadline" : "other",
    })),
  },
}

export const WithCustomColors: Story = {
  args: {
    value: new Date(2025, 7, 14),
    events: [
      {
        date: new Date(2025, 7, 5),
        title: "High Priority",
        type: "urgent",
        color: "bg-red-500/20 text-red-700",
      },
      {
        date: new Date(2025, 7, 10),
        title: "Medium Priority",
        type: "normal",
        color: "bg-yellow-500/20 text-yellow-700",
      },
      {
        date: new Date(2025, 7, 15),
        title: "Low Priority",
        type: "optional",
        color: "bg-green-500/20 text-green-700",
      },
    ],
  },
}

export const Interactive: Story = {
  args: {
    value: new Date(2025, 7, 14),
    events: sampleEvents,
    onDateClick: (date) => {
      console.log("Date clicked:", date)
      alert(`Date clicked: ${date.toDateString()}`)
    },
    onEventClick: (event) => {
      console.log("Event clicked:", event)
      alert(`Event clicked: ${event.title}`)
    },
  },
}

export const SeptemberExample: Story = {
  args: {
    value: new Date(2025, 8, 1),
    events: [
      {
        date: new Date(2025, 7, 28),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 7, 28),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 7, 28),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 7, 29),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 7, 30),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 1),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 2),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 3),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 4),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 5),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 6),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 7),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 8),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 9),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 10),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 11),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 12),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 13),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 14),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 15),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 16),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 17),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 18),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 19),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 20),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 21),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 22),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 23),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 24),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 25),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 26),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 27),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 28),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 29),
        title: "title",
        type: "section",
      },
      {
        date: new Date(2025, 8, 30),
        title: "title",
        type: "section",
      },
    ],
  },
}