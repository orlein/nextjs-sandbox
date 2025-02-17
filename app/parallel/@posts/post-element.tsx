import { Post } from "./fetch-posts";

export interface PostElementProps extends Post {}

export function PostElement(props: PostElementProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>written by {props.userId}</p>
    </div>
  );
}
