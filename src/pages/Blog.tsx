import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";

const Blog = () => {
  const { id } = useParams();
  const { getSingleBlog } = useBlogCall();

  useEffect(() => {
    if (id) {
      getSingleBlog(id);
    }
  }, [id]);

  return <div>Blog</div>;
};

export default Blog;
