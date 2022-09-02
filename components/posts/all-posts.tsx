import React from 'react';
import { PostsGrid } from './posts-grid';
import { PostsCompenent } from '../../data/models/Post';
import styles from './all-posts.module.css';

export const AllPosts: React.FC<PostsCompenent> = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
