"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoaderWrapper from "./components/Loader";
import CustomSpeedDial from "./components/CustomSpeedDial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StickyHeader from "./components/header/StickyHeader";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const skipLoaderPaths = ["/not-found"];
  const noLayoutPaths = ["/thankyou"];

  if (noLayoutPaths.includes(pathname)) {
    return (
      <>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    );
  }

  if (skipLoaderPaths.includes(pathname)) {
    return (
      <>
        <Header />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <CustomSpeedDial />
        <Footer />
      </>
    );
  }

  return (
    <LoaderWrapper fadeDuration={1500} showDuration={3000}>
      <StickyHeader onOpenForm={() => { }} />
      <Header />
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
      <CustomSpeedDial />
      <Footer />
    </LoaderWrapper>
  );
}
