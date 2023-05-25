import { create } from "zustand"

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
