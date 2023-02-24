import { GetStaticPaths, GetStaticProps } from "next";

const PostById = ({post}:any) => {
    
    return <div>Article {post.title}</div>;
  };
//build time
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
};

//build time
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const ids = posts.map((post: any) => post.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostById;
