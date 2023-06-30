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

const DummyThree = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true }) // once: true means animation only happens once
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <m.section ref={sectionRef} className="w-full grid grid-cols-2 gap-10">
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        one
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        two
      </m.div>
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.4, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        three
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.4, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        four
      </m.div>
      <m.div
        variants={variantsOdd}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.7, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        five
      </m.div>
      <m.div
        variants={variantsEven}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.7, type: "linear", stiffness: 40 }}
        className="w-full rounded-lg bg-red-500/50 p-7 text-white font-bold uppercase"
      >
        six
      </m.div>
    </m.section>
  )
}

export default DummyThree
