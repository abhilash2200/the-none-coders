"use client";

import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
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

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = { ...errors };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.projectType) {
      tempErrors.projectType = "Please select a project type";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Project details are required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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
        <div className="mx-auto w-full">
          <h3 className="text-[#002147] text-center mb-3 text-xl font-bold">
            Get a Free Consultation
          </h3>

          <p className="text-center text-gray-600 mb-5 text-sm leading-5">
            Share your project details and our team will connect with you to
            discuss the best solution for your business.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-[5px] border text-sm focus:outline-none focus:ring-1 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#252525]"
                  }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-[5px] border text-sm focus:outline-none focus:ring-1 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#252525]"
                  }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-[5px] border text-sm focus:outline-none focus:ring-1 ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#252525]"
                  }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-[5px] border text-sm bg-white focus:outline-none focus:ring-1 ${errors.projectType ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#252525]"
                  }`}
              >
                <option value="">Select Project Type</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Custom Software">Custom Software</option>
              </select>
              {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Project Details"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-[5px] border text-sm focus:outline-none focus:ring-1 ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#252525]"
                  }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              sx={{
                mt: 2,
                width: "100%",
                mx: "auto",
                display: "block",
                background: "#252525",
                color: "#fff",
                borderRadius: "5px",
                padding: "10px",
                fontWeight: "600",
                textTransform: "none",
                fontSize: "1rem",
                letterSpacing: "0.5px",
                transition: "0.3s",
                "&:hover": {
                  background: "#252526",
                  color: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 8px 18px rgba(0,0,0,0.25)",
                },
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Submit"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
