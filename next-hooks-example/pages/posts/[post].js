import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { post } = router.query;
  console.log('router.query', router.query);

  return <p>Post: {post}</p>;
};

export default Post;
