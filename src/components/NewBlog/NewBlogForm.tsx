import { Form, FormikProps } from "formik";
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

interface SingleBlogType {
  title: string;
  content: string;
  categoryId: string;
  image: string;
}

interface NewBlogFormProps {
  singleBlog: SingleBlogType | null;
}

const NewBlogForm: React.FC<
  NewBlogFormProps & FormikProps<NewBlogFormValues>
> = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  singleBlog,
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <TextField
            name="title"
            label="Blog Title * "
            value={values.title} // Formik values'larını kullanıyoruz
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
            error={touched.title && Boolean(errors.title)}
            sx={{ width: "28ch" }}
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
              sx={{ width: "32ch" }}
            >
              {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
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
            sx={{ width: "28ch" }}
          />
        </Box>

        <TextField
          label="Blog"
          name="content"
          multiline
          rows={30}
          variant="outlined"
          value={values.content}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write your blog content here..."
          sx={{
            width: {
              xs: "100%",
              sm: "60ch",
              md: "90ch",
            },
          }}
        />

        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting
              ? "Loading..."
              : singleBlog
              ? "Update Blog"
              : "Create New Blog"}
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default NewBlogForm;
