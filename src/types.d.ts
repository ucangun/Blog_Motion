/* ---------------------------------- */
/*              BlogSlice             */
/* ---------------------------------- */

interface BlogPost {
  _id: string;
  userId: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
  comments: string[];
  likes: string[];
  countOfVisitors: number;
  createdAt: string;
  updatedAt: string;
}

interface SinglePost {
  _id: string;
  userId: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  categoryId: {
    _id: string;
    name: string;
  };
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
  comments: string[];
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
  categoryId: {
    _id: string;
  };
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

/* ---------------------------------- */
/*              LoginForm             */
/* ---------------------------------- */
interface LoginFormValues {
  username: string;
  password: string;
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
