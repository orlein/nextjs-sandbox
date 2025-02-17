interface PostDetailProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function Post(props: PostDetailProps) {
  const params = await props.params;

  return (
    <>
      <h1>Post {params.postId}</h1>
    </>
  );
}
