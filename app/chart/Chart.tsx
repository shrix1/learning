"use client"
import { AreaChart } from "@tremor/react"

const chartdata = [
  {
    date: "Jan 22",
    one: 2890.5,
    two: 2338,
  },
  {
    date: "Feb 22",
    one: 2756,
    two: 2103,
  },
  {
    date: "Mar 22",
    one: 3322,
    two: 2194,
  },
  {
    date: "Apr 22",
    one: 3470,
    two: 2108,
  },
  {
    date: "May 22",
    one: 3475,
    two: 1812,
  },
  {
    date: "Jun 22",
    one: 3129,
    two: 1726,
  },
]

const dataFormatter = (number: number) => {
  return "" + Intl.NumberFormat("us").format(number).toString()
}

const Chart = () => (
  <>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata} // data to be displayed
      index="date" // x-axis
      categories={["one", "two"]} // tooltip when hover
      colors={["indigo", "cyan"]} // colors for each category
      valueFormatter={dataFormatter} // y-axis
      showYAxis // show y-axis
      showXAxis // show x-axis
      showAnimation // show animation
      showTooltip // show tooltip
      showGridLines // show grid lines
      showLegend // show legend 2 categories
      showGradient // show gradient
      yAxisWidth={100} // y-axis value (text) width
      minValue={0}
      maxValue={100} // y-axis min and max value
      stack={false} // 2 curve stack on each other
      curveType="natural" // curse style
      connectNulls={false} // show null data by connecting the previous and next data
      allowDecimals // decimal on tooltip
      noDataText="no data to show" // if no data
    />
  </>
)

export default Chart
