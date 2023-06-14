import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <nav className="w-full p-3 bg-black text-black border-b-2 border-b-lime-300 ">
      <div className="flex gap-5 justify-center items-center text-sm tracking-wider font-semibold flex-wrap">
        <Link href="/" className="px-3 py-1 rounded-lg bg-lime-300">
          Home
        </Link>
        <Link href="filter" className="px-3 py-1 rounded-lg bg-lime-300">
          Filter
        </Link>
        <Link href="Cal" className="px-3 py-1 rounded-lg bg-lime-300">
          Calender
        </Link>
        <Link href="dropdown" className="px-3 py-1 rounded-lg bg-lime-300">
          Dropdown
        </Link>
        <Link href="zustand" className="px-3 py-1 rounded-lg bg-lime-300">
          zustand
        </Link>
        <Link href="sidebar" className="px-3 py-1 rounded-lg bg-lime-300">
          Sidebar
        </Link>
        <Link href="dnd" className="px-3 py-1 rounded-lg bg-lime-300">
          dnd
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
