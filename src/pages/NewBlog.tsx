import { Container } from "@mui/material";
import { Formik } from "formik";
import NewBlogForm from "../components/NewBlog/NewBlogForm";

export interface NewBlogFormValues {
  categoryId: string;
  title: string;
  content: string;
  image: string;
  isPublish: boolean;
}

const NewBlog: React.FC = () => {
  const initialValues: NewBlogFormValues = {
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: false,
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
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <NewBlogForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default NewBlog;
