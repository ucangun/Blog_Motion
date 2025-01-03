import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Box,
  Typography,
  Grid2,
  TextField,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toastError, toastSuccess } from "../helpers/ToastNotify";

const info = [
  {
    icon: <FaUser size={24} />,
    title: "Contact Person",
    description: "www.ucangun.com",
  },
  {
    icon: <FaEnvelope size={24} />,
    title: "Email",
    description: "blogmotion.team@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "Location",
    description: "Germany",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toastSuccess("Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            toastError("Failed to send message!");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 8 }}>
        <Typography variant="h4" textAlign="center" color="text.primary">
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          I’m open to discussing new projects, creative ideas, or opportunities
          to be part of your visions.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          At BlogMotion, we believe in the transformative power of stories. Our
          platform is designed to be a vibrant space where ideas flow freely,
          creativity knows no bounds, and connections are forged through the
          written word. Whether you’re here to share your thoughts, seek
          inspiration, or learn from others, BlogMotion is where your voice
          finds its audience and your story finds its motion.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Dive into a world of diverse perspectives, thought-provoking blogs,
          and meaningful interactions. Join a community of storytellers,
          learners, and dreamers who are shaping the future one post at a time.
          BlogMotion isn’t just a blogging platform—it’s a movement that bridges
          gaps, fuels passions, and celebrates the art of storytelling. Let’s
          move forward together, one story at a time.
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid2 container spacing={1}>
        {/* Info Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 8 }}>
            {info.map((item, index) => (
              <Box key={index} display="flex" alignItems="center" padding={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: "grey.900",
                    color: "grey.200",
                  }}
                >
                  {item.icon}
                </Box>
                <Box ml={2}>
                  <Typography variant="h6" color="text.primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid2>

        {/* Form Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
              Ready to Get Started?
            </Typography>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                fullWidth
                label="Name"
                name="user_name"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="user_email"
                type="email"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="user_message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Contact;
