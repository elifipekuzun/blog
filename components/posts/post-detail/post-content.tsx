import React, { ElementType } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './post-content.module.css';
import { PostHeader } from './post-header';
import { PostComponent } from '../../../data/models/Post';
import Image, { ImageProps } from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

interface Renderer {
  [nodeType: string]: ElementType | undefined;
}

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

export const PostContent: React.FC<PostComponent> = ({ post }) => {
  const customRenderers: Renderer = {
    img(image: ImageProps) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    p({ node, children }) {
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              className={styles.image}
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
    code({ className, children }) {
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={post.image} slug={post.slug} />
      {post.content && (
        <ReactMarkdown components={customRenderers}>
          {post.content}
        </ReactMarkdown>
      )}
    </article>
  );
};
