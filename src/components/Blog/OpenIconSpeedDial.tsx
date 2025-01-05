import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DeleteIcon from "@mui/icons-material/Delete";
// import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import EditNoteIcon from "@mui/icons-material/EditNote";
import useBlogCall from "../../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";

interface OpenIconSpeedDialProps {
  blogId: string | undefined;
}

export default function OpenIconSpeedDial({ blogId }: OpenIconSpeedDialProps) {
  const { deleteBlog } = useBlogCall();
  const navigate = useNavigate();

  const actions = [
    {
      icon: <DeleteIcon />,
      name: "Delete",
      onClick: () => blogId && deleteBlog(blogId),
    },
    {
      icon: <EditNoteIcon />,
      name: "Edit",
      onClick: () => navigate(`/updateblog/${blogId}`),
    },
    // { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 100 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
