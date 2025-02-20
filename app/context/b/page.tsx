"use client";

import { CounterDisplay, CounterButton } from "@/app/counter";
import Link from "next/link";
import { useCounterStore } from "../counter-zustand";

export default function TwoPage() {
  const counter = useCounterStore((state: any) => state.counter);
  const increase = useCounterStore((state: any) => state.increase);

  return (
    <div>
      <p>Two</p>
      <Link href={"/context/a"}>Page A</Link>
      <hr />
      <p>Context</p>

      <CounterDisplay />
      <CounterButton />
      <hr />
      <p>Zustand</p>
      <p>{counter}</p>
      <button onClick={increase}>Increment</button>
    </div>
  );
}
