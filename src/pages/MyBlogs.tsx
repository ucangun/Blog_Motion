import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const MyBlog = () => {
  const { getBlogByUserId } = useBlogCall();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { userBlog } = useSelector((state: RootState) => state.blog);
  console.log(userBlog);

  useEffect(() => {
    if (currentUser && currentUser._id) {
      getBlogByUserId(currentUser._id);
    }
  }, [currentUser]);

  return <div>MyBlogs</div>;
};

export default MyBlog;
