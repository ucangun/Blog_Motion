import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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

// For React Quill Text Editor

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    ["code-block"],
  ],
};

export const NewBlogFormSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  categoryId: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
});

const NewBlogForm: React.FC<
  NewBlogFormProps & FormikProps<NewBlogFormValues>
> = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  setFieldValue,
  isEditMode,
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
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
            error={touched.title && Boolean(errors.title)}
            sx={{ width: "28ch" }}
          />

          <FormControl>
            <InputLabel id="categoryId">Category</InputLabel>
            <Select
              name="categoryId"
              labelId="categoryId"
              id="demo-simple-select"
              value={values.categoryId || ""}
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

        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "60ch",
              md: "90ch",
            },
            border: "1px solid #c4c4c4",
            borderRadius: "4px",
            overflow: "hidden",
            "& .tox": {
              border: "none",
              borderRadius: 0,
            },
          }}
        >
          <ReactQuill
            id="content"
            theme="snow"
            modules={modules}
            value={values.content}
            placeholder="Write your blog content here..."
            onChange={(value) => setFieldValue("content", value)}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting
              ? "Loading..."
              : isEditMode
              ? "Update Blog"
              : "Create New Blog"}
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default NewBlogForm;
