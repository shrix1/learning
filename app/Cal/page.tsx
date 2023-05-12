import React from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./cal.css"
import Cal2 from "./Cal2"

const Page = () => {
  return (
    <main>
      {/* <Calendar onChange={() => setDate} value={date} />
      {date && date?.toDateString()} */}

      {/* eslint-disable-next-line */}
      <Cal2 />
    </main>
  )
}

export default Page
