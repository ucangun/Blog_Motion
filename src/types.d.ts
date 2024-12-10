/* ---------------------------------- */
/*              BlogSlice             */
/* ---------------------------------- */

interface SingleCategoryType {
  id: string;
  name: string;
}

interface UserType {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}

interface CommentType {
  _id: string;
  blogId: string;
  userId: UserType;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogPost {
  _id: string;
  userId: UserType;
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
  comments: CommentType[];
  likes: string[];
  countOfVisitors: number;
  createdAt: string;
  updatedAt: string;
}

/* ---------------------------------- */
/*             Single Blog            */
/* ---------------------------------- */

interface SinglePost {
  _id: string;
  userId: UserType;
  categoryId: {
    _id: string;
    name: string;
  };
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
  comments: CommentType[];
  likes: string[];
  countOfVisitors: number;
  createdAt: string;
  updatedAt: string;
}

interface CategoryPost {
  _id: string;
  name: string;
  createdAt: string;
}

/* ---------------------------------- */
/*              New Blog              */
/* ---------------------------------- */

interface NewBlogFormValues {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

/* ---------------------------------- */
/*               Comment              */
/* ---------------------------------- */

interface NewCommentType {
  blogId: string;
  comment: string;
}

/* ---------------------------------- */
/*              Like Info             */
/* ---------------------------------- */

interface LikeInfoType {
  didUserLike: boolean;
  countOfLikes: number;
}

/* ---------------------------------- */
/*              LoginForm             */
/* ---------------------------------- */
interface LoginFormValues {
  username: string;
  password: string;
}

/* ---------------------------------- */
/*            ForgotPassword          */
/* ---------------------------------- */
interface ForgotPasswordValues {
  email: string;
}

interface ResetPasswordValues {
  password: string;
  confirmPassword: string;
}

/* ---------------------------------- */
/*            RegisterForm            */
/* ---------------------------------- */

interface RegisterFormValues {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  city: string;
  bio: string;
}

/* ---------------------------------- */
/*                  News              */
/* ---------------------------------- */

interface NewsSource {
  id: string | null;
  name: string;
}

interface NewsArticle {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}
