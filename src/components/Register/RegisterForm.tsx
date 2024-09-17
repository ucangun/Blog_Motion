import * as Yup from "yup";
import { FormikProps, Form } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { RegisterFormValues } from "../../pages/Register";
import googleLogo from "../../assets/images/Google.png";

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .min(3, "username must be at least 3 characters!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
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

const RegisterForm: React.FC<FormikProps<RegisterFormValues>> = ({
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
          sx={{ width: "30ch" }}
        />
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.firstName && errors.firstName}
          error={touched.firstName && Boolean(errors.firstName)}
          sx={{ width: "30ch" }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.lastName && errors.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
          sx={{ width: "30ch" }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
          sx={{ width: "30ch" }}
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
          sx={{ width: "30ch" }}
        />
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Register"}
          </Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Sign up with"}
            <img src={googleLogo} alt="" />
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default RegisterForm;
