import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Container } from "@mui/material";
import NewBlogForm from "../components/NewBlog/NewBlogForm";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";

const NewBlog: React.FC = () => {
  const { getBlogData, getSingleBlog, addNewBlog, updateBlog } = useBlogCall();
  const { id } = useParams();
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const isEditMode = Boolean(id);

  const initialValues: NewBlogFormValues = {
    userId: currentUser?._id as string,
    categoryId: isEditMode ? (singleBlog?.categoryId?._id as string) : "",
    title: isEditMode ? (singleBlog?.title as string) : "",
    content: isEditMode ? (singleBlog?.content as string) : "",
    image: isEditMode ? (singleBlog?.image as string) : "",
    isPublish: isEditMode ? (singleBlog?.isPublish as boolean) : true,
  };

  useEffect(() => {
    getBlogData("categories");
    if (isEditMode && id) {
      getSingleBlog(id);
    }
  }, [id, isEditMode]);

  return (
    <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
      {isEditMode && !singleBlog ? (
        <p>Loading...</p>
      ) : (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (isEditMode && id) {
              updateBlog(id, values);
            } else {
              addNewBlog("blogs", values);
            }
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => (
            <NewBlogForm {...props} singleBlog={singleBlog} />
          )}
        />
      )}
    </Container>
  );
};

export default NewBlog;
