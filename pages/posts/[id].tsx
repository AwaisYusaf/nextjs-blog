import { posts, getPostById } from "../../data/posts";
import type { Post } from "../../data/posts";
import Head from "next/head";
import Link from "next/link";
export function getStaticPaths() {
  const allPostIds = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  return {
    paths: allPostIds,
    fallback: false,
  };
}
export function getStaticProps({ params }: { params: { id: string } }) {
  const data = getPostById(params.id);
  return {
    props: {
      data,
    },
  };
}

function Post({ data }: any) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className="flex flex-col items-center mt-20">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-2xl mt-10">{data.description}</p>
        <Link href="/" className="mt-6">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default Post;
