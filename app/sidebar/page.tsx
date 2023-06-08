"use client"
import React from "react"
import { checkingSKills } from "../store/useCounter"
import "quill/dist/quill.snow.css"

const Page = () => {
  // const [open, setOpen] = React.useState(false)
  // const [state, setState] = checkingSKills((state) => [
  //   state.state,
  //   state.setState,
  // ])

  return (
    <>
      <main className="w-full h-screen flex">
        <section
          className={`${
            true ? "w-20" : "w-[300px] bg-sky-400/20"
          }w-20 lg:w-[300px] border-r-2 border-lime-400 h-full p-5 overflow-hidden`}
        >
          <ul className="space-y-6">
            <button
              className="border-2 p-1 rounded-lg"
              onClick={() => {
                // setOpen((prev) => !prev)
                // setState("hello world")
              }}
            >
              open
            </button>
            {/* <li>[0] {state}</li> */}
            <li>[1] HOME</li>
            <li>[2] HOME</li>
            <li>[3] HOME</li>
          </ul>
        </section>

        <section className="w-full border-2 border-sky-400 grid place-items-center text-sky-400 text-5xl">
          <div className="border-2 p-10 rounded-lg">Content here</div>
        </section>
      </main>
    </>
  )
}

export default Page
