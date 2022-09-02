import type { NextPage, GetStaticProps } from 'next';
import { FeaturedPosts } from '../components/home-page/featured-posts';
import { Hero } from '../components/home-page/hero';
import { PostsCompenent } from '../data/models/Post';
import { getFeaturedPosts } from '../lib/posts-util';

const Home: NextPage<PostsCompenent> = ({ posts }) => {
  return (
    <>
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
