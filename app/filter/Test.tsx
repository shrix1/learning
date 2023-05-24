"use client"
import React, { useState, useEffect, useMemo } from "react"

interface IEvent {
  id: number
  date: string
  name: string
}

const Test = () => {
  const datesArr: string[] = ["2023-05-14", "2023-05-15", "2023-05-23"]

  const eventsArr: IEvent[] = [
    {
      id: 1,
      date: "2023-05-14",
      name: "event 1",
    },
    {
      id: 2,
      date: "2023-05-23",
      name: "event 2",
    },
    {
      id: 3,
      date: "2023-05-29",
      name: "event 3",
    },
    {
      id: 4,
      date: "2023-05-22",
      name: "event 4",
    },
  ]

  //   const [fiveDays, setFiveDays] = useState<boolean>(false)
  let filterData: IEvent[] = []
  const [dates, setDates] = useState<string[]>(datesArr)
  const [events, setEvents] = useState<IEvent[]>(eventsArr)
  const [renderData, setRenderData] = useState<IEvent[] | IEvent | any>()
  const [today, setToday] = useState<boolean>(false)
  const [tomorrow, setTomorrow] = useState<boolean>(false)

  useEffect(() => {
    events.forEach((item) => {
      const date = new Date(item.date)

      datesArr.forEach((dates) => {
        // console.log(dates, date.toISOString().slice(0, 10))
        if (date.toISOString().slice(0, 10).includes(dates)) {
          filterData = [...filterData, item]
        }

        if (
          today &&
          date
            .toISOString()
            .slice(0, 10)
            .includes(new Date().toISOString().slice(0, 10))
        ) {
          filterData = [...filterData, item]
        }
      })

      setRenderData(filterData)
    })

    return () => {
      setRenderData([])
      filterData = []
    }
  }, [today])

  return (
    <>
      <div className="md:space-x-10 flex  flex-col md:flex-row">
        <div className="space-x-3">
          <input
            type="checkbox"
            name="today"
            id="today"
            checked={today}
            onChange={(e) => setToday(e.target.checked)}
          />
          <label htmlFor="today">TODAY</label>
        </div>

        <div className="space-x-3">
          <input
            type="checkbox"
            name="tomorrow"
            id="tomorrow"
            checked={tomorrow}
            onChange={(e) => setTomorrow(e.target.checked)}
          />
          <label htmlFor="tomorrow">TOMORROW</label>
        </div>

        {/* <div className="space-x-3">
          <input
            type="checkbox"
            name="5days"
            id="5days"
            checked={fiveDays}
            onChange={(e) => setFiveDays(e.target.checked)}
          />
          <label htmlFor="5days">THREE DAYS</label>
        </div> */}
      </div>

      <hr className="my-5" />

      <div className="flex gap-4 flex-col md:flex-row flex-wrap">
        {renderData?.map((item: any) => {
          return (
            <div
              key={item?.id}
              className="p-5 border border-lime-100 flex gap-3 rounded-lg flex-col"
            >
              <span>{item?.id}</span>
              <span> {item?.date}</span>
              <span> {item?.name}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Test
