import { Container } from "@mui/material";
import { Formik } from "formik";
import NewBlogForm from "../components/NewBlog/NewBlogForm";
import useBlogCall from "../hooks/useBlogCall";

export interface NewBlogFormValues {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

const NewBlog: React.FC = () => {
  const { addNewBlog } = useBlogCall();

  const initialValues: NewBlogFormValues = {
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: true,
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "6rem ",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          addNewBlog("blogs", values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <NewBlogForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default NewBlog;
