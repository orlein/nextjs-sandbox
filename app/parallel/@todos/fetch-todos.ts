"use server";
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTodos() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
  const todoListRes = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
    {
      cache: "no-cache",
    }
  );
  const todoList = (await todoListRes.json()) as Todo[];
  return todoList;
}
