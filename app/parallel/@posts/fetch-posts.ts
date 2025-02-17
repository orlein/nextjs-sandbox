export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2300)); // Simulate network delay
  const postListRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postList = (await postListRes.json()) as Post[];
  return postList;
}
