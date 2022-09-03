import type { NextPage, GetStaticProps } from 'next';
import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { PostsCompenent } from '../../data/models/Post';
import Head from 'next/head';

const AllPostsPage: NextPage<PostsCompenent> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all posts related my works with their explainations!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsCompenent> = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default AllPostsPage;
