import { fetchPosts } from "./fetch-posts";

export default async function PostListPage() {
  const posts = await fetchPosts();
  return (
    <>
      <h1>Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
