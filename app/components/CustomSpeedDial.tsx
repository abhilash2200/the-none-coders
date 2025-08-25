"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

function CustomSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Custom SpeedDial"
        sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1200 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            bgcolor: "#2D176A",
            color: "#fff",
            "&:hover": {
              bgcolor: "#0D0031",
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            FabProps={{
              sx: {
                bgcolor: "#02B228",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#005613",
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default CustomSpeedDial;
