import { Editor } from "@tinymce/tinymce-react";
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
          <Editor
            apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
            value={values.content}
            init={{
              height: 500,
              // menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "codesample",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | codesample | help",
              content_style: `
                body {
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 1rem;
                }
              `,
            }}
            onEditorChange={(content, editor) => {
              const plainText = editor.getContent({ format: "text" });
              setFieldValue("content", plainText);
            }}
          />
        </Box>

        {/* <TextField
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
        /> */}

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
