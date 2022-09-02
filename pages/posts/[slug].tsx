import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PostContent } from '../../components/posts/post-detail/post-content';
import { PostComponent } from '../../data/models/Post';
import { getPostData, getPostFiles } from '../../lib/posts-util';

interface ContentParams extends ParsedUrlQuery {
  slug: string;
}

const PostDetailPage: NextPage<PostComponent> = ({ post }) => {
  return (
    <>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps<
  PostComponent,
  ContentParams
> = async (context) => {
  const slug = context.params && context.params.slug;
  if (!slug) {
    return { notFound: true };
  }
  const post = getPostData(slug + '.md');
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const postFiles = getPostFiles();

  const paths = new Array(postFiles.length).fill(0).map((_, i) => {
    return {
      params: { slug: postFiles[i].replace(/\.md$/, '') },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export default PostDetailPage;
