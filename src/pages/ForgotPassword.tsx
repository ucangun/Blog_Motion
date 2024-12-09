import { Container } from "@mui/material";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import ForgotPasswordForm, {
  ForgotPasswordSchema,
} from "../components/ForgotPassword/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  const { forgotPassword } = useAuthCall();

  const initialValues: ForgotPasswordValues = {
    email: "",
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
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values, actions) => {
          forgotPassword(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <ForgotPasswordForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default ForgotPassword;
