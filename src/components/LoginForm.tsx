import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { LoginFormValues } from "../pages/Login";
import googleLogo from "../assets/images/Google.png";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
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
});

const LoginForm: React.FC<FormikProps<LoginFormValues>> = ({
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
          name="username"
          label="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.username && errors.username}
          error={touched.username && Boolean(errors.username)}
          sx={{ width: "27ch" }}
        />

        <TextField
          label="Password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
          sx={{ width: "27ch" }}
        />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Login"}
          </Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Continue with"}
            <img src={googleLogo} alt="" />
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default LoginForm;
