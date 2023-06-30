import React from "react"
import DummyOne from "./DummyOne"
import DummyTwo from "./DummyTwo"
import DummyThree from "./DummyThree"
import DummyFour from "./DummyFour"
import DummyFive from "./DummyFive"

const Page = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full h-[100vh] bg-white/20 px-20 py-10 overflow-hidden">
        <h1 className="uppercase p-2">Normal Animation</h1>
        <DummyOne />
      </div>

      <div className="w-full h-[100vh] bg-sky-500/20 px-20 py-10 overflow-hidden">
        <h1 className="uppercase p-2">Spring Smooth Animation</h1>
        <DummyTwo />
      </div>

      <div className="w-full h-[100vh] bg-red-500/20 px-20 py-10 overflow-hidden">
        <h1 className="uppercase p-2">Linear Animation without damping</h1>
        <DummyThree />
      </div>

      <div className="w-full h-[100vh] bg-teal-500/20 px-20 py-10 overflow-hidden">
        <h1 className="uppercase p-2">Linear Animation with damping (crazy)</h1>
        <DummyFour />
      </div>

      <div className="w-full h-[100vh] bg-lime-500/20 px-20 py-10 overflow-hidden">
        <h1 className="uppercase p-2">Animation with velocity</h1>
        <DummyFive />
      </div>
    </main>
  )
}

export default Page
