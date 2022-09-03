import type { NextPage, GetStaticProps } from 'next';
import { FeaturedPosts } from '../components/home-page/featured-posts';
import { Hero } from '../components/home-page/hero';
import { PostsCompenent } from '../data/models/Post';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

const Home: NextPage<PostsCompenent> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Elif&apos;s Blog</title>
        <meta
          name="description"
          content="I post about my works about software development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsCompenent> = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
