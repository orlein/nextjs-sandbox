import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counter: 0,
  increase: () =>
    set((state: { counter: number }) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 }),
  update: (newCounter: number) => set({ counter: newCounter }),
}));
