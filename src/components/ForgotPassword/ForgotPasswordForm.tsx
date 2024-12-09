import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import { Box, Button, TextField } from "@mui/material";

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm: React.FC<FormikProps<ForgotPasswordValues>> = ({
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
          gap: 2,
        }}
      >
        <TextField
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
          sx={{ width: "27ch" }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{ width: "35ch" }}
        >
          {isSubmitting ? "Loading..." : "Forgot Password"}
        </Button>
      </Box>
    </Form>
  );
};

export default ForgotPasswordForm;
