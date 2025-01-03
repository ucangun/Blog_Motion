import {
  Box,
  IconButton,
  Typography,
  Link as MuiLink,
  Grid2,
} from "@mui/material";
import { FaMedium, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const footerLinks = [
  { label: "About", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialMediaLinks = [
  { icon: <FaMedium />, href: "https://medium.com/@ucangun76" },
  { icon: <FaGithub />, href: "https://github.com/ucangun" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ucangun75/profilecard/?igsh=em9uMjE2MnN3bnVz",
  },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ucangun/" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        color: "#333",
        padding: "2rem",
        mt: "auto",
      }}
    >
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {/* Logo Section */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Logo />
        </Grid2>

        {/* Links Section */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {footerLinks.map(({ label, href }) => (
              <MuiLink key={href} href={href} color="#333" underline="none">
                {label}
              </MuiLink>
            ))}
          </Box>
        </Grid2>

        {/* Social Media Icons Section */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {socialMediaLinks.map(({ icon, href }, index) => (
              <IconButton
                key={index}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#333" }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Grid2>
      </Grid2>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          borderTop: "1px solid #333",
          pt: 2,
        }}
      >
        <Typography variant="body2" color="#333">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
