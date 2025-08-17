"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const Calendar = dynamic(
  async () => {
    const { Calendar } = await import("@/registry/components/ui/calendar");
    return Calendar;
  },
  {
    ssr: false,
  }
);

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
}
