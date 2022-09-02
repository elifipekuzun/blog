import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '../data/models/Post';

const postsDir = path.join(process.cwd(), 'data', 'content', 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postsDir);
}

export const getPostData = (fileName: string): IPost => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ''); //removes md extension

  const postData: IPost = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = (): IPost[] => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date! > b.date! ? -1 : 1));

  return sortedPosts;
};

export const getFeaturedPosts = (): IPost[] => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
