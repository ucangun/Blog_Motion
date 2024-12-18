import { Box, Tooltip, Button } from "@mui/material";
import { IoShareOutline } from "react-icons/io5";
// import {
//   WhatsappShareButton,
//   WhatsappIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   EmailIcon,
//   EmailShareButton,
//   LinkedinShareButton,
//   LinkedinIcon,
// } from "react-share";
import { toastSuccess } from "../../helpers/ToastNotify";

interface BlogShareProps {
  url: string;
  title: string;
}

const BlogShare: React.FC<BlogShareProps> = ({ url, title }) => {
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: title, url });
        toastSuccess("Blog shared successfully!");
      } catch (err) {
        console.error("Sharing via native apps failed:", err);
        toastSuccess(
          "Sharing via native apps is unavailable. Link copied to clipboard!"
        );
        navigator.clipboard.writeText(url);
      }
    } else {
      // Fallback: Copy link if native share is unavailable
      navigator.clipboard.writeText(url);
      toastSuccess("Link copied to clipboard!");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      {/* Native Share */}
      <Tooltip title="Share via apps or copy link">
        <Button onClick={handleNativeShare} startIcon={<IoShareOutline />}>
          Share
        </Button>
      </Tooltip>

      {/* Social Media Buttons */}
      {/* <EmailShareButton url={url} title={title}>
        <EmailIcon size={20} round />
      </EmailShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={20} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={20} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={20} round />
      </LinkedinShareButton> */}
    </Box>
  );
};

export default BlogShare;
