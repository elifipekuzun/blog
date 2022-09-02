import React from 'react';
import { PostsGrid } from '../posts/posts-grid';
import styles from './featured-posts.module.css';
import { PostsCompenent } from '../../data/models/Post';

export const FeaturedPosts: React.FC<PostsCompenent> = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
