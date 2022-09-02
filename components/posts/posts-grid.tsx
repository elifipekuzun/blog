import React from 'react';
import styles from './posts-grid.module.css';
import { PostsCompenent } from '../../data/models/Post';
import { PostItem } from './post-item';

export const PostsGrid: React.FC<PostsCompenent> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => {
        return (
          <PostItem
            date={post.date}
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            slug={post.slug}
          />
        );
      })}
    </ul>
  );
};
