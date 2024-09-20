interface BlogPost {
  _id: string;
  userId: string;
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

interface CategoryPost {
  _id: string;
  name: string;
  createdAt: string;
}

interface NewBlogFormValues {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}
