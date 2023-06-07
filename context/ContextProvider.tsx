"use client"
import React, { useContext, createContext, useState } from "react"

interface ContextType {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
}

const ContextGuy = createContext<ContextType>({
  state: "sasa", //default value
  setState: () => {},
})

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState<string>("")

  return (
    <>
      <ContextGuy.Provider value={{ state, setState }}>
        {children}
      </ContextGuy.Provider>
    </>
  )
}

export const useContextGuy = () => useContext(ContextGuy)
