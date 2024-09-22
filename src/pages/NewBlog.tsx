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

  const isEditMode = Boolean(id);

  const initialValues: NewBlogFormValues = {
    categoryId: singleBlog?.categoryId || "",
    title: singleBlog?.title || "",
    content: singleBlog?.content || "",
    image: singleBlog?.image || "",
    isPublish: singleBlog?.isPublish || true,
  };

  useEffect(() => {
    getBlogData("categories");
    if (id) {
      getSingleBlog(id);
    }
  }, [id]);

  return (
    <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
      {singleBlog ? (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (isEditMode) {
              updateBlog(id as string, values);
            } else {
              addNewBlog("blogs", values);
            }
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => (
            <NewBlogForm {...props} singleBlog={singleBlog} />
          )}
        ></Formik>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default NewBlog;
