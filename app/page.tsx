"use client"
import Image from "next/image"
import Button from "./components/Button"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl tracking-widest uppercase">
        Custom Button design
      </h1>
      <hr className="w-full " />

      <Button
        name="count by one"
        className="text-2xl w-[200px]"
        onClick={() => setCount((p) => p + 1)}
      />
      <h1 className="text-xl text-center">{count}</h1>

      <hr className="w-full " />

      <Button
        name="count by Ten"
        className="bg-sky-300 text-black px-3 rounded-md"
        onClick={() => setCount2((p) => p + 10)}
      />
      <h1 className="text-xl text-center">{count2}</h1>

      <hr className="w-full " />
    </div>
  )
}
