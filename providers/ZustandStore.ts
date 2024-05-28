import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";

interface CounterState {
  count: number;
  count2: number;
  increment: () => void;
  decrement: () => void;
  incrementByTen: () => void;
  incrementByTwo: () => void;
  setCount: (value: number) => void;
}
const initialState = {
  count: 0,
  count2: 0,
};
export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        incrementByTen: () => set((state) => ({ count2: state.count2 + 10 })),
        incrementByTwo: () => set((state) => ({ count2: state.count2 + 2 })),
        setCount: (value: number) => set({ count: value }),
      }),
      {
        name: "counter",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
