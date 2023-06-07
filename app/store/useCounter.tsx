import { create } from "zustand"
import { persist } from "zustand/middleware"

//persist not implemensted because next js is server side rendering in development mode

interface Counter {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounter = create<Counter>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

interface AddItems {
  items: string[]
  renderNow: boolean
  setItems: (item: string) => void
}

export const useAddItems = create<AddItems>((set) => ({
  items: [],
  renderNow: false,
  setItems: (item) =>
    set((state) => ({
      items: [...state.items, item],
      renderNow: true,
    })),
}))

interface Skills {
  state: string
  setState: (name: string) => void
}

export const checkingSKills = create<Skills>((set) => ({
  state: "sasasas",
  setState: (name) => set({ state: name }),
}))
