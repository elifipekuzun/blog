import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          width={300}
          height={300}
          src={'/images/site/elif.jpg'}
          alt="An image showing Elif"
        />
      </div>
      <h1>I am Elif Ipek</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};
