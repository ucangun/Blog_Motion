import { Form, FormikProps } from "formik";
import { NewBlogFormValues } from "../../pages/NewBlog";
import { Box, Button, TextField } from "@mui/material";

const NewBlogForm: React.FC<FormikProps<NewBlogFormValues>> = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <Form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <TextField
          name="title"
          label="Blog Title * "
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.title && errors.title}
          error={touched.title && Boolean(errors.title)}
          sx={{ width: "30ch" }}
        />
        <TextField
          label="Category *"
          name="categoryId"
          variant="outlined"
          value={values.categoryId}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.categoryId && errors.categoryId}
          error={touched.categoryId && Boolean(errors.categoryId)}
          sx={{ width: "30ch" }}
        />
        <TextField
          label="Image *"
          name="image"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.image && errors.image}
          error={touched.image && Boolean(errors.image)}
          sx={{ width: "30ch" }}
        />
        <TextField
          label="Content *"
          name="content"
          type="text"
          variant="outlined"
          value={values.content}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.content && errors.content}
          error={touched.content && Boolean(errors.content)}
          sx={{ width: "30ch" }}
        />

        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Create New Blog"}
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default NewBlogForm;
