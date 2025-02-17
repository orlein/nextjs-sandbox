"use client";

import { Counter, CounterButton, CounterDisplay } from "./counter";
import React from "react";
import { PlainComponent } from "./plain-component";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/parallel"}>Parallel Routes</Link>
    </>
  );
}
