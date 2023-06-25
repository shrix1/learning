import React from "react"
import Chart from "./Chart"
import Pie from "./Pie"

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chart />
      <Pie />
    </div>
  )
}

export default Page
