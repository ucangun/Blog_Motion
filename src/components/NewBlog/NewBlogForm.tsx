import { Form, FormikProps } from "formik";
import { NewBlogFormValues } from "../../pages/NewBlog";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const NewBlogForm: React.FC<FormikProps<NewBlogFormValues>> = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const { categories } = useSelector((state: RootState) => state.blog);

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
        <FormControl>
          <InputLabel id="categoryId">Category</InputLabel>
          <Select
            labelId="categoryId"
            name="categoryId"
            id="demo-simple-select"
            value={values.categoryId}
            label="Category"
            onChange={handleChange}
            sx={{ width: "34ch" }}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
