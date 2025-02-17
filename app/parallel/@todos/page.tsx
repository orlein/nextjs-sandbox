import { fetchTodos } from "./fetch-todos";
import { TodoElement } from "./todo-element";

export default async function TodoList() {
  const todoList = await fetchTodos();

  return (
    <>
      <h1>Todo</h1>
      {todoList.map((todo) => (
        <TodoElement {...todo} key={`todo_${todo.id}`} />
      ))}
    </>
  );
}
