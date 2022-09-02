import React from 'react';
import { IPost } from '../../data/models/Post';
import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.css';

export const PostItem: React.FC<IPost> = ({
  title,
  excerpt,
  image,
  date,
  slug,
}) => {
  const formattedDate = new Date(date!).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              width={300}
              height={200}
              alt={title}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
