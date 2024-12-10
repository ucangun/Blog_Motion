import { Container } from "@mui/material";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import ResetPasswordForm, {
  ResetPasswordSchema,
} from "../components/ResetPassword/ResetPasswordForm";

import { useParams } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const { resetPassword } = useAuthCall();
  const { token } = useParams<{ token: string }>();
  console.log(token);

  const initialValues: ResetPasswordValues = {
    password: "",
    confirmPassword: "",
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
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, actions) => {
          resetPassword(token!, values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <ResetPasswordForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default ResetPassword;
