import React from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./cal.css"
import Anothercal from "./AnotherCal"

const Page = () => {
  return (
    <main>
      {/* <Calendar onChange={() => setDate} value={date} />
      {date && date?.toDateString()} */}

      <Anothercal />
    </main>
  )
}

export default Page
