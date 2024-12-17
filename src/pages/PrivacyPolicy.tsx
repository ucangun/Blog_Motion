import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: "2rem 1rem", sm: "4rem", md: "4rem 6rem" },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ textAlign: "center" }}
        >
          Privacy Policy
        </Typography>

        <Typography color="text.secondary" mt={2}>
          Welcome to BlogMotion, where stories find motion! Your privacy is
          important to us, and we are committed to safeguarding your personal
          information while fostering a secure and creative space for sharing
          ideas, learning, and storytelling.
        </Typography>
      </Box>

      {/* Section 1: Information We Collect */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          1. Information We Collect
        </Typography>
        <Typography color="text.secondary" mb={1}>
          To provide and enhance our services, we may collect the following
          types of information:
        </Typography>
        <Typography color="text.secondary" mb={1}>
          <strong>A. Information You Provide</strong>
        </Typography>
        <Typography color="text.secondary" mb={2}>
          - Account Information: Name, email address, and username when you sign
          up.
          <br />
          - Blog Content: Posts, comments, and other content you create and
          share.
          <br />- Optional Details: Profile photo, bio, and other optional
          account details.
        </Typography>

        <Typography color="text.secondary" mb={1}>
          <strong>B. Automatically Collected Information</strong>
        </Typography>
        <Typography color="text.secondary">
          - Usage Data: Information about how you interact with BlogMotion, such
          as pages viewed, links clicked, and time spent on the platform.
          <br />- Device and Browser Information: IP address, device type,
          operating system, and browser settings.
        </Typography>
      </Box>

      {/* Section 2: How We Use Your Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          2. How We Use Your Information
        </Typography>
        <Typography color="text.secondary" mb={1}>
          Your information is used for the following purposes:
        </Typography>
        <Typography color="text.secondary">
          - To create and manage your account.
          <br />
          - To publish and display your blog posts and interactions with others.
          <br />
          - To improve our platform by analyzing usage trends and user feedback.
          <br />
          - To personalize your experience by recommending blogs or authors.
          <br />
          - To ensure the security of your account and detect potential abuse.
          <br />- To communicate with you regarding updates, promotions, or
          support.
        </Typography>
      </Box>

      {/* Section 3: Sharing Your Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          3. Sharing Your Information
        </Typography>
        <Typography color="text.secondary">
          We value your privacy and only share your information in the following
          cases:
        </Typography>
        <Typography color="text.secondary" mt={1}>
          - <strong>Public Content:</strong> Blog posts, comments, and profile
          details you share are visible to other users or the public, depending
          on your settings.
          <br />- <strong>Service Providers:</strong> Trusted third-party
          partners who assist us with hosting, analytics, or technical support.
          <br />- <strong>Legal Obligations:</strong> When required to comply
          with laws, regulations, or legal processes.
        </Typography>
      </Box>

      {/* Section 4: Protecting Your Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          4. Protecting Your Information
        </Typography>
        <Typography color="text.secondary">
          We implement industry-standard measures to protect your data,
          including encryption, secure servers, and regular security updates.
          However, no system is 100% secure, so please keep your account
          credentials confidential.
        </Typography>
      </Box>

      {/* Section 5: Retention of Data */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          5. Retention of Data
        </Typography>
        <Typography color="text.secondary">
          We retain your data as long as necessary to provide our services or
          comply with legal obligations. You may request account deletion at any
          time, and we will process your request promptly.
        </Typography>
      </Box>

      {/* Section 6: Third-Party Links */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          6. Third-Party Links
        </Typography>
        <Typography color="text.secondary">
          BlogMotion may contain links to external websites. We are not
          responsible for their privacy practices or content. We encourage you
          to review their privacy policies before sharing any information.
        </Typography>
      </Box>

      {/* Section 7: Updates to Privacy Policy */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          7. Updates to This Privacy Policy
        </Typography>
        <Typography color="text.secondary">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. If significant changes are
          made, we will notify you via email or through a notice on our
          platform.
        </Typography>
      </Box>

      {/* Section 8: Contact Us */}
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          8. Contact Us
        </Typography>
        <Typography color="text.secondary">
          If you have any questions, concerns, or feedback about this Privacy
          Policy, please reach out to us at:
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Email: ucangun76@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
