"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import SliderPopup from "@/components/SliderPopup";
export default function QuickActionsWithForm() {
  const [openDial, setOpenDial] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);

  const handleOpen = () => setOpenDial(true);
  const handleClose = () => setOpenDial(false);

  const actions = [
    {
      icon: <WhatsAppIcon />,
      name: "WhatsApp",
      onClick: () => window.open("https://wa.me/1234567890", "_blank"),
    },
    {
      icon: <CallIcon />,
      name: "Call",
      onClick: () => window.open("tel:1234567890"),
    },
    {
      icon: <MessageIcon />,
      name: "Consultation",
      onClick: () => setOpenForm(true),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Quick Actions"
        sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1200 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={openDial}
        FabProps={{
          sx: {
            bgcolor: "#2D176A",
            color: "#fff",
            "&:hover": { bgcolor: "#0D0031" },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              action.onClick();
              handleClose();
            }}
            FabProps={{
              sx: {
                bgcolor: "#02B228",
                color: "#fff",
                "&:hover": { bgcolor: "#005613" },
              },
            }}
          />
        ))}
      </SpeedDial>
      <SliderPopup open={openForm} handleClose={() => setOpenForm(false)} />
    </Box>
  );
}
