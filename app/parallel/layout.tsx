import React, { PropsWithChildren } from "react";

interface LayoutProps
  extends PropsWithChildren<{
    todos: React.ReactNode;
    posts: React.ReactNode;
  }> {}

export default async function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-row">
      <div>
        <h1>Todos</h1>
        {props.todos}
      </div>

      <div>
        <h1>Posts</h1>
        {props.posts}
      </div>
    </div>
  );
}
