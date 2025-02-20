import { PropsWithChildren } from "react";
import { Counter } from "../counter";
import Link from "next/link";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Counter>{children}</Counter>
    </div>
  );
}
