import React from 'react';
import styles from './post-header.module.css';
import { IPost } from '../../../data/models/Post';
import Image from 'next/image';

export const PostHeader: React.FC<IPost> = ({ title, image, slug }) => {
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div>
        <Image src={imagePath} width={200} height={150} alt={title} />
      </div>
    </header>
  );
};
