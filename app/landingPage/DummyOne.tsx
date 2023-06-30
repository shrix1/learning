"use client"
import React, { useEffect, useRef } from "react"
import { motion as m, useInView, useAnimation } from "framer-motion"

const variantsOdd = {
  hidden: { opacity: 0, x: -500 },
  visible: { opacity: 1, x: 0 },
}

const variantsEven = {
  hidden: { opacity: 0, x: 500 },
  visible: { opacity: 1, x: 0 },
}

const DummyOne = () => {
  return (
    <m.section className="w-full grid grid-cols-2 gap-10">
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        one
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        two
      </m.div>
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        three
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        four
      </m.div>
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        five
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full rounded-lg bg-white/50 p-7 text-black font-bold uppercase"
      >
        six
      </m.div>
    </m.section>
  )
}

export default DummyOne
