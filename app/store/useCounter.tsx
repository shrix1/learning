import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Counter {
  count: number
  setCount: (c: number) => void
}

export const useCounter = create<Counter>((set) => ({
  count: 0,
  setCount: (c: number) =>
    set((state) => ({
      count: state.count + c,
    })),
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
