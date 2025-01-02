import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import { Box, Button, TextField } from "@mui/material";
import MyButton from "../../components/Button";
import googleLogo from "../../assets/images/Google.png";
import login from "../../assets/images/login.png";
import useAuthCall from "../../hooks/useAuthCall";
import PasswordField from "../../components/PasswordField";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Password must contain at least one digit!")
    .matches(/[a-z]/, "Must contain lowercase letters!")
    .matches(/[A-Z]/, "Must contain uppercase letters!")
    .matches(
      /[@$?!%&*]+/,
      "Must contain at least one special character (@$?!%&*)"
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
  const { signInWithGoogle } = useAuthCall();

  return (
    <Form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${login})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: { xs: "none", lg: "block" },
            width: { lg: "40%" },
            height: { lg: "23rem" },
            borderRadius: "1rem 0 0 1rem",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            width: { lg: "50%" },
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

          <PasswordField
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            errors={errors}
            width="27ch"
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              mb: ".5rem",
            }}
          >
            <MyButton to="/forgot" type="secondary">
              Forgot Password
            </MyButton>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ width: "15ch", height: "2rem" }}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </Button>
          </Box>

          <Box>
            <Button
              type="submit"
              variant="contained"
              onClick={signInWithGoogle}
              disabled={isSubmitting}
              sx={{ width: "35ch" }}
            >
              {isSubmitting ? "Loading..." : "Continue with"}
              <img src={googleLogo} alt="" />
            </Button>
          </Box>

          <MyButton to="/signup" type="secondary">
            Don't have an account? Register
          </MyButton>
        </Box>
      </Box>
    </Form>
  );
};

export default LoginForm;
