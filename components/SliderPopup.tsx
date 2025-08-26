"use client";

import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  TextField,
  MenuItem,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type PopupFormProps = {
  open: boolean;
  handleClose: () => void;
};

export default function SliderPopup({ open, handleClose }: PopupFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log("Form Submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });

    setLoading(false);
    handleClose();
  };
  const inputStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    marginBottom: "10px",
    "& .MuiOutlinedInput-root": {
      fontSize: "0.95rem",
      "& fieldset": { border: "none" },
      "&:hover fieldset": { border: "none" },
      "&.Mui-focused fieldset": { border: "none" },
      "&.Mui-focused": {
        boxShadow: "0 0 0 3px rgba(0, 33, 71, 0.18)",
        backgroundColor: "#fff",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.9rem",
      color: "444",
    },
  };
  const [loading, setLoading] = React.useState(false);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullWidth
      disableScrollLock
      PaperProps={{
        sx: {
          borderRadius: "18px",
          boxShadow: "0px 12px 35px rgba(0,0,0,0.15)",
          width: { xs: "95%", sm: "600px", md: "650px" },
          maxWidth: "100%",
          margin: "0 auto",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 14,
          top: 14,
          background: "#f1f1f1",
          "&:hover": { background: "#e0e0e0" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: { xs: 3, sm: 5 } }}>
        <div
          style={{
            margin: "0 auto",
            width: "100%",
          }}
        >
          <h3
            style={{
              color: "#002147",
              textAlign: "center",
              marginBottom: "12px",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            Get a Free Consultation
          </h3>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "20px",
              fontSize: "0.95rem",
              lineHeight: "1.3",
            }}
          >
            Share your project details and our team will connect with you to
            discuss the best solution for your business.
          </p>

          <form>
            <TextField
              name="name"
              label="Full Name"
              variant="filled"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              sx={inputStyle}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              sx={inputStyle}
            />
            <TextField
              name="phone"
              label="Phone Number"
              type="tel"
              variant="filled"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              sx={inputStyle}
            />
            <TextField
              select
              name="projectType"
              label="Project Type"
              variant="filled"
              fullWidth
              value={formData.projectType}
              onChange={handleChange}
              sx={inputStyle}
            >
              <MenuItem value="">Select Project Type</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Mobile App">Mobile App</MenuItem>
              <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
              <MenuItem value="Custom Software">Custom Software</MenuItem>
            </TextField>
            <TextField
              name="message"
              label="Project Details"
              multiline
              rows={3}
              variant="filled"
              fullWidth
              value={formData.message}
              onChange={handleChange}
              sx={inputStyle}
            />

            <Button
              sx={{
                mt: 2,
                width: "200px",
                mx: "auto",
                display: "block",
                background: "linear-gradient(135deg, #002147, #0056b3)",
                color: "#fff",
                borderRadius: "30px",
                padding: "12px",
                fontWeight: "600",
                textTransform: "none",
                fontSize: "1rem",
                letterSpacing: "0.5px",
                transition: "0.3s",
                "&:hover": {
                  background: "linear-gradient(135deg, #0056b3, #002147)",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 8px 18px rgba(0,0,0,0.25)",
                },
              }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <CircularProgress size={22} sx={{ color: "white" }} /> : "Submit"}
            </Button>
          </form>
        </div>
      </DialogContent>

    </Dialog>
  );
}
