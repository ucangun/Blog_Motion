import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Container } from "@mui/material";
import NewBlogForm, {
  NewBlogFormSchema,
} from "../components/NewBlog/NewBlogForm";
import useBlogCall from "../hooks/useBlogCall";
import { RootState } from "../app/store";

const NewBlog: React.FC = () => {
  const { getBlogData, getSingleBlog, addNewBlog, updateBlog } = useBlogCall();
  const { id } = useParams();
  const { singleBlog } = useSelector((state: RootState) => state.blog);
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const isEditMode = Boolean(id);

  const initialValues: NewBlogFormValues = {
    userId: currentUser?._id || "",
    categoryId: isEditMode ? singleBlog?.categoryId?._id || "" : "",
    title: isEditMode ? singleBlog?.title || "" : "",
    content: isEditMode ? singleBlog?.content || "" : "",
    image: isEditMode ? singleBlog?.image || "" : "",
    isPublish: isEditMode ? singleBlog?.isPublish ?? true : true,
  };

  useEffect(() => {
    getBlogData("categories");
    if (isEditMode && id) {
      getSingleBlog(id);
    }
  }, [id, isEditMode]);

  if (isEditMode && !singleBlog) {
    return <p>Loading...</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
      {isEditMode && !singleBlog ? (
        <p>Loading...</p>
      ) : (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={NewBlogFormSchema}
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
            <NewBlogForm {...props} isEditMode={isEditMode} />
          )}
        />
      )}
    </Container>
  );
};

export default NewBlog;
