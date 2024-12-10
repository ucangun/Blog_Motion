import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import { Box, Button, TextField } from "@mui/material";

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "password must contain at least one digit!")
    .matches(/[a-z]/, "must contain lowercase letters!")
    .matches(/[A-Z]/, "must contain uppercase letters!")
    .matches(
      /[@$?!%&*]+/,
      "must contain at least one special character(@$?!%&*)"
    ),
  confirmPassword: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "password must contain at least one digit!")
    .matches(/[a-z]/, "must contain lowercase letters!")
    .matches(/[A-Z]/, "must contain uppercase letters!")
    .matches(
      /[@$?!%&*]+/,
      "must contain at least one special character(@$?!%&*)"
    ),
});

const ResetPasswordForm: React.FC<FormikProps<ResetPasswordValues>> = ({
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
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
          sx={{ width: "27ch" }}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.confirmPassword && errors.confirmPassword}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          sx={{ width: "27ch" }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{ width: "35ch" }}
        >
          {isSubmitting ? "Loading..." : "Set New Password"}
        </Button>
      </Box>
    </Form>
  );
};

export default ResetPasswordForm;
