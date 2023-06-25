import Link from "next/link"
import path from "path"
import React from "react"

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Filter", path: "/filter" },
    { name: "Calender", path: "/Cal" },
    { name: "Dropdown", path: "/dropdown" },
    { name: "zustand", path: "/zustand" },
    { name: "Sidebar", path: "/sidebar" },
    { name: "dnd", path: "/dnd" },
    { name: "custom C/r", path: "/Custom" },
  ]
  return (
    <nav className="w-full p-3 bg-black text-black border-b-2 border-b-lime-300 ">
      <div className="flex gap-5 justify-center items-center text-sm tracking-wider font-semibold flex-wrap">
        {links.map((link, i) => (
          <div key={i}>
            <Link href={link.path} className="px-3 py-1 rounded-lg bg-lime-300">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
