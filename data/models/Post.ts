export interface IPost {
  title?: string;
  excerpt?: string;
  image?: string;
  date?: string;
  slug?: string;
  content?: string;
  isFeatured?: boolean;
}

export type PostComponent = {
  post: IPost;
};

export type PostsCompenent = {
  posts: IPost[];
};
