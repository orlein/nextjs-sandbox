import { Todo } from "./fetch-todos";

export interface TodoElementProps extends Todo {}

export function TodoElement(props: TodoElementProps) {
  return (
    <div className="flex flex-row">
      <input type="checkbox" defaultChecked={props.completed} readOnly />
      <h1>{props.title}</h1>
    </div>
  );
}
