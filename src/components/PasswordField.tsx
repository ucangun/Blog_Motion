import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  touched: boolean | undefined;
  errors: { [key: string]: string };
  width?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  touched,
  errors,
  width = "27ch",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <FormControl
      sx={{
        m: 1,
        width: width,
      }}
      variant="outlined"
    >
      <InputLabel htmlFor={`${name}`}>{label}</InputLabel>
      <OutlinedInput
        id={`${name}`}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={touched && Boolean(errors[name])}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {/* Conditionally show helperText if there's an error */}
      {touched && errors[name] && (
        <Box
          sx={{
            color: "error.main",
            fontSize: "0.75rem",
            marginTop: "0.25rem",
          }}
        >
          {errors[name]}
        </Box>
      )}
    </FormControl>
  );
};

export default PasswordField;
