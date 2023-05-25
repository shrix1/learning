"use client"
import React, { useRef, useState } from "react"
import Button from "../components/Button"
import { useAddItems } from "../store/useCounter"

const Page = () => {
  const items = useAddItems((state) => state.items)
  const setItems = useAddItems((state) => state.setItems)
  const renderNow = useAddItems((state) => state.renderNow)

  // const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")

  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if (inputRef.current) {
    //   setItems(inputRef.current.value)
    //   inputRef.current.value = ""
    // }
    setItems(value)
    setValue("")
  }

  return (
    <>
      <form className="flex gap-4" onSubmit={handle}>
        <input
          placeholder="add-items"
          // ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="p-2 text-black bg-lime-600 rounded-md placeholder:text-white"
        />
        <Button
          name="add"
          className="px-4 py-2 rounded-md"
          type="submit"
          disabled={value === ""}
        />
      </form>

      <div className="text-xl">
        {renderNow &&
          items.length > 0 &&
          items.map((i) => {
            return <p key={i}>{i}</p>
          })}
      </div>
    </>
  )
}

export default Page
