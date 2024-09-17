import * as React from "react";
import useAuthCall from "../hooks/useAuthCall";
import { Container } from "@mui/material";
import { Formik } from "formik";
import LoginForm from "../components/LoginForm";

export interface LoginFormValues {
  username: string;
  password: string;
}

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
