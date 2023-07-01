"use client"
import React from "react"
import { motion as m, useInView, useScroll, useTransform } from "framer-motion"

const Page = () => {
  const { scrollYProgress, scrollY, scrollXProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#ff008c", "#7700ff"])
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, 50])
  const bgColor2 = useTransform(scrollYProgress, [0, 1], ["#7700ff", "#ff008c"])

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <m.section
      className="grid place-items-center w-full h-[150vh] overflow-hidden"
      initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="relative">
          <m.div
            style={{
              scale,
            }}
            // transition={{ duration: 2 }}
            className="w-[50px] h-[50px] rounded-lg bg-sky-500 absolute -top-0 right-[280px] 
        z-1 grid place-items-center text-white font-bold text-lg overflow-hidden"
          >
            B3
            <m.div
              style={{ scaleY: scrollYProgress }}
              className="bg-white absolute  w-full h-full bottom-0"
            ></m.div>
          </m.div>
        </div> */}
      <div className="relative">
        <div
          className="w-[800px] h-[200px] rounded-md bg-gray-400 bg-clip-padding backdrop-filter
         backdrop-blur-[1px] bg-opacity-20 border border-gray-100 z-10 relative"
        ></div>
        <m.div
          style={{
            y,
            backgroundColor: bgColor,
          }}
          transition={{ duration: 2 }}
          className="w-[200px] h-[200px] rounded-lg bg-sky-500 absolute top-6 right-10 
        z-1 grid place-items-center text-white font-bold text-2xl"
        >
          B1
        </m.div>

        <m.div
          style={{
            y: y2,
            backgroundColor: bgColor2,
          }}
          className="w-[100px] h-[200px] rounded-lg bg-lime-500 absolute -top-10 left-40
        z-1 grid place-items-center text-white font-bold text-2xl"
        >
          B2
        </m.div>
      </div>
    </m.section>
  )
}

export default Page
