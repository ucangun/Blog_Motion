import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import EditNoteIcon from "@mui/icons-material/EditNote";
import useBlogCall from "../../hooks/useBlogCall";

interface OpenIconSpeedDialProps {
  deleteId: string | undefined;
}

export default function OpenIconSpeedDial({
  deleteId,
}: OpenIconSpeedDialProps) {
  const { deleteBlog } = useBlogCall();

  const actions = [
    {
      icon: <DeleteIcon />,
      name: "Delete",
      onClick: () => deleteId && deleteBlog(deleteId),
    },
    { icon: <EditNoteIcon />, name: "Edit" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <Box sx={{ height: 120, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 10, right: 16 }}
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
