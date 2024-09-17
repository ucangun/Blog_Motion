import * as React from "react";
import { Formik } from "formik";
import RegisterForm, { SignupSchema } from "../components/RegisterForm";
import { Container } from "@mui/material";
import useAuthCall from "../hooks/useAuthCall";

export interface RegisterFormValues {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  city: string;
  bio: string;
}

const Register: React.FC = () => {
  const { register } = useAuthCall();

  const initialValues: RegisterFormValues = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    city: "",
    bio: "",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: "12rem",
      }}
    >
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          register(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RegisterForm {...props} />}
      ></Formik>
    </Container>
  );
};
export default Register;
