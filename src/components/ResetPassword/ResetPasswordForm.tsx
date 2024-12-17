import * as Yup from "yup";
import { Form, FormikProps } from "formik";
import { Box, Button, TextField } from "@mui/material";
import reset from "../../assets/images/reset.png";

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/\d+/, "Password must contain at least one digit!")
    .matches(/[a-z]/, "Password must contain lowercase letters!")
    .matches(/[A-Z]/, "Password must contain uppercase letters!")
    .matches(
      /[@$?!%&*]+/,
      "Password must contain at least one special character(@$?!%&*)"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  verificationCode: Yup.string()
    .required("Verification Code is required")
    .length(6, "Verification Code must be 6 digits long")
    .matches(/^\d{6}$/, "Verification Code must be a 6-digit number"),
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            name="password"
            label="Password"
            id="password"
            type="password"
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
            id="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.confirmPassword && errors.confirmPassword}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            sx={{ width: "27ch" }}
          />
          <TextField
            name="verificationCode"
            label="Verification Code"
            id="verificationCode"
            value={values.verificationCode}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.verificationCode && errors.verificationCode}
            error={touched.verificationCode && Boolean(errors.verificationCode)}
            sx={{ width: "27ch" }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{ width: "35ch" }}
          >
            {isSubmitting ? "Loading..." : "Change Password"}
          </Button>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${reset})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: { xs: "none", lg: "block" },
            width: { lg: "40%" },
            height: { lg: "23rem" },
            borderRadius: "1rem 0 0 1rem",
          }}
        ></Box>
      </Box>
    </Form>
  );
};

export default ResetPasswordForm;
