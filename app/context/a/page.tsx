"use client";

import { CounterDisplay, CounterButton } from "@/app/counter";
import Link from "next/link";
import { useStore } from "zustand";
import { useCounterStore } from "../counter-zustand";

export default function OnePage() {
  const counter = useCounterStore((state: any) => state.counter);
  const increase = useCounterStore((state: any) => state.increase);
  return (
    <div>
      <p>One</p>

      <Link href={"/context/b"}>Page B</Link>
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
