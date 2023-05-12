"use client"
import React, { useState } from "react"
// import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { Calendar, Day } from "react-modern-calendar-datepicker"
import "./cal2.css"

const Cal2 = () => {
  const [selectedDay, setSelectedDay] = useState<Day[]>([])

  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        calendarClassName="custom-calendar"
        calendarTodayClassName="custom-today-day"
        colorPrimary="#0fbcf9"
        colorPrimaryLight="rgba(75, 207, 250, 0.4)"
      />

      {JSON.stringify(selectedDay)}
    </>
  )
}

export default Cal2
