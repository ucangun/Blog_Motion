import AccountHeader from "./AccountSettings/AccountHeader";
import ProfileSettings from "./AccountSettings/ProfileSettings";
import DangerZone from "./AccountSettings/DangerZone";
import { Box, Divider } from "@mui/material";

const SettingsContainer = () => {
  return (
    <Box
      maxWidth="576px"
      width="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <AccountHeader />
      <ProfileSettings />
      <Divider />
      <DangerZone />
    </Box>
  );
};

export default SettingsContainer;
