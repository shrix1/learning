import React from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./cal.css"
import Cal2 from "./Cal2"
import Anothercal from "./AnotherCal"

const Page = () => {
  return (
    <main>
      {/* <Calendar onChange={() => setDate} value={date} />
      {date && date?.toDateString()} */}

      {/* <Cal2 /> */}
      <Anothercal />
    </main>
  )
}

export default Page
