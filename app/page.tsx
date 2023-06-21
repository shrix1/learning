"use client"
import Button from "./components/Button"
import { useEffect, useMemo, useRef, useState } from "react"
import Input from "./components/Input"
import { useCounter } from "./store/useCounter"
import { useContextGuy } from "@/context/ContextProvider"
import dynamic from "next/dynamic"
import "./globals.css"
import Sheet from "./Sheet"
import { v4 as uuid } from "uuid"

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const uuids = uuid()
  console.log(uuids)
  //uuid change everyRender

  // const {count,setCount} = useCounter()
  // this is also valid approach but it will cause re-render of whole useCounter state and actions

  const { state } = useContextGuy()
  const count = useCounter((state) => state.count)
  const setCount = useCounter((state) => state.increment)

  const [count2, setCount2] = useState<number>(0)
  const [input, setInput] = useState<string>("s")
  const [input2, setInput2] = useState<number>(0)

  const [value, setValue] = useState("")

  const people = [
    { id: 1, value: "Bill Horsefighter" },
    { id: 2, value: "Amanda Hijacker" },
    { id: 3, value: "Leo Summerhalter" },
    { id: 4, value: "Jane Sinkspitter" },
  ]

  const tags = [
    { id: 1, value: "JavaScript" },
    { id: 2, value: "TypeScript" },
    { id: 3, value: "Ruby" },
    { id: 3, value: "Python" },
  ]

  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: (searchTerm: any, renderList: any, mentionChar: any) => {
        const list = mentionChar === "@" ? people : tags
        const includesSearchTerm = list.filter((item: any) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        )
        renderList(includesSearchTerm)
      },
    }),
    []
  )

  const id = uuid()
  console.log(id)

  return (
    <div className="flex ">
      {/* <h1 className="text-2xl tracking-widest uppercase">
        Custom Button design {state}
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
      <hr className="w-full " /> */}

      {/* <div className="list-disc list-item list-outside ">
        <RichTextEditor
          value={value}
          onChange={(e: any) => setValue(e)}
          controls={[
            ["bold", "italic", "underline", "strike"],
            ["h1", "h2", "h3", "h4"],
            ["unorderedList", "orderedList", "clean"],
            ["alignLeft", "alignCenter", "alignRight"],
            ["link", "codeBlock"],
          ]}
          classNames={{
            root: "your-root-class",
            toolbar: "your-toolbar-class",
            toolbarInner: "your-toolbarInner-class",
            toolbarGroup: "your-toolbarGroup-class",
            toolbarControl: "your-toolbarControl-class",
          }}
          placeholder="Type something..."
          mentions={mentions}
        />
      </div>

      <div className="flex flex-col gap-10">
        <div
          dangerouslySetInnerHTML={{ __html: value }}
          className="something w-[500px] p-2 h-[600px] border-2"
        ></div>

        {value}
      </div> */}

      <Sheet />
    </div>
  )
}
