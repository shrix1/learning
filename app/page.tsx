"use client"
import Button from "./components/Button"
import { useState } from "react"
import Input from "./components/Input"
import { useCounter } from "./store/useCounter"

export default function Home() {
  // const {count,setCount} = useCounter()
  // this is also valid approach but it will cause re-render of whole useCounter state and actions

  const count = useCounter((state) => state.count)
  const setCount = useCounter((state) => state.increment)

  const [count2, setCount2] = useState<number>(0)
  const [input, setInput] = useState<string>("s")
  const [input2, setInput2] = useState<number>(0)

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl tracking-widest uppercase">
        Custom Button design
      </h1>
      <hr className="w-full " />

      <Button
        name={`count ${count}`}
        className="text-2xl w-[200px] "
        outline
        onClick={setCount}
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

      <Input
        placeholder="something"
        type="text"
        className="outline-none "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1 className="text-xl text-center">{input}</h1>
      <hr className="w-full " />

      <Input
        placeholder="something"
        type="number"
        className="outline-none bg-sky-500 p-1 rounded-full"
        value={input2}
        onChange={(e) => setInput2(e.target.valueAsNumber)}
      />
      <h1 className="text-xl text-center">{input2}</h1>
      <hr className="w-full " />
    </div>
  )
}
