import type { NextPage, GetStaticProps } from 'next';
import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { PostsCompenent } from '../../data/models/Post';

const AllPostsPage: NextPage<PostsCompenent> = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
