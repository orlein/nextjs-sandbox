import Link from "next/link";
import { PropsWithChildren } from "react";

export default async function ContextPage(props: PropsWithChildren) {
  return (
    <div className="flex flex-row gap-2">
      <Link href={"/context/a"}>Page A</Link>
      <Link href={"/context/b"}>Page B</Link>
    </div>
  );
}
