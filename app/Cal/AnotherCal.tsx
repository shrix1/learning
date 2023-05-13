"use client"
import React from "react"
import { DayPicker } from "react-day-picker"
import "./AnotherCal.css"

export default function Example() {
  const [selected, setSelected] = React.useState<Date>()
  console.log(selected?.toDateString())

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      showOutsideDays
    />
  )
}
