"use client";

import { Counter, CounterButton, CounterDisplay } from "./counter";
import React from "react";
import { PlainComponent } from "./plain-component";

export default function Home() {
  return (
    <>
      <Counter>
        <CounterDisplay />
        <CounterButton />
        <PlainComponent />
      </Counter>
      <Counter>
        <CounterDisplay />
        <CounterButton />
      </Counter>
    </>
  );
}
