import React from "react"

const Page = () => {
  return (
    <main className="w-full h-screen">
      <section className="m-5 flex flex-col ">
        CHECKBOX
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="one"
            id="one"
            className="bg-sky-200 hover:bg-sky-300 rounded-sm border-none checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="one">1</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="two"
            id="two"
            className="bg-sky-200 hover:bg-sky-300 rounded-md border-none checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="two">2</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="three"
            id="three"
            className="bg-sky-200 hover:bg-sky-300 rounded-lg border-none checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="three">3</label>
        </div>
      </section>

      <section className="m-5 flex flex-col">
        RADIO
        <div className="flex  items-center gap-3">
          <input
            type="radio"
            name="one"
            id="one"
            className="bg-sky-200 hover:bg-sky-300 rounded-sm border-none checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="one">1</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="two"
            id="two"
            className="bg-sky-200 hover:bg-sky-300 rounded-md border-none checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="two">2</label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="three"
            id="three"
            className="bg-sky-200 hover:bg-sky-300 rounded-lg border-4 border-white checked:bg-sky-500 checked:border-none focus:ring-0
            focus:outline-none hover:checked:bg-sky-500 checked:ring-0 focus:checked:border-none focus:checked:bg-sky-500"
          />
          <label htmlFor="three">3</label>
        </div>
      </section>
    </main>
  )
}

export default Page
