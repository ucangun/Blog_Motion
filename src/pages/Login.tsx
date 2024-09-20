import * as React from "react";
import useAuthCall from "../hooks/useAuthCall";
import { Container } from "@mui/material";
import { Formik } from "formik";
import LoginForm, { LoginSchema } from "../components/Login/LoginForm";

const Login: React.FC = () => {
  const { login } = useAuthCall();

  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: "12rem",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <LoginForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default Login;
