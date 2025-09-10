"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, ListItem, Collapse, ListItemButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Inter } from "next/font/google";
import { useTheme } from "../../context/ThemeContext"; // 👈 context import

interface DropItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropItem: DropItem[];
}

const listData: NavItem[] = [
  { name: "ABOUT COMPANY", href: "/about-us", dropItem: [] },
  { name: "SOLUTIONS", href: "/solution", dropItem: [] },
  { name: "PRODUCTS", href: "/products", dropItem: [] },
  { name: "UPDATES", href: "/updates", dropItem: [] },
  { name: "CAREER", href: "/career", dropItem: [] },
  { name: "SUPPORT", href: "/support", dropItem: [] },
];

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});

function Header() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = React.useState<number | null>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme(); // 👈 context values

  // Disable scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  // Click-outside to close mobile menu
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Auto-close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
    setOpenAccordionIndex(null);
  }, [pathname]);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: theme === "light" ? "#DADADA" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image
                src="/assets/img/the-non-coders-logo.webp"
                alt="logo"
                width={150}
                height={100}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <List sx={{ display: "inline-flex", py: 0 }}>
              {listData.map((list, i) => (
                <Box
                  key={i}
                  sx={{ position: "relative" }}
                  onMouseEnter={() => list.dropItem.length > 0 && setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href={list.href}
                      className={`text-[14px] px-4 py-4 block transition-colors duration-300 ${
                        inter.className
                      } ${theme === "light" ? "text-[#3A3A3A]" : "text-white"}`}
                    >
                      {list.name}
                    </Link>
                  </ListItem>

                  {/* Dropdown for desktop */}
                  {list.dropItem.length > 0 && hoveredIndex === i && (
                    <List
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        bgcolor: theme === "light" ? "white" : "#333",
                        zIndex: 50,
                        boxShadow: 3,
                        borderRadius: 1,
                        minWidth: 200,
                      }}
                    >
                      {list.dropItem.map((drop, j) => (
                        <ListItem key={j} sx={{ px: 2, py: 1 }}>
                          <Link
                            href={drop.href}
                            className={`transition-colors duration-300 ${inter.className} ${
                              theme === "light"
                                ? "text-[#3A3A3A] hover:text-[#19d442]"
                                : "text-white hover:text-[#19d442]"
                            }`}
                          >
                            {drop.name}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              ))}
            </List>
          </Box>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border rounded text-sm hidden lg:block"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          {/* Mobile Hamburger Icon */}
          <IconButton
            size="large"
            edge="start"
            className="!block lg:!hidden"
            sx={{ mr: 2, color: theme === "light" ? "black" : "white" }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Backdrop */}
      {menuOpen && (
        <Box
          onClick={() => setMenuOpen(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: 1299,
          }}
        />
      )}

      {/* Slide-Out Mobile Menu */}
      <Box
        ref={mobileMenuRef}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "300px",
          bgcolor: theme === "light" ? "black" : "#111",
          zIndex: 1300,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          display: { xs: "block", lg: "none" },
          boxShadow: 3,
          p: 2,
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={() => setMenuOpen(false)}>
            <CloseIcon className="text-white" />
          </IconButton>
        </Box>

        {/* Accordion Navigation for Mobile */}
        <List>
          {listData.map((list, i) => {
            const hasDropdown = list.dropItem.length > 0;
            const isOpen = openAccordionIndex === i;

            return (
              <Box key={i}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => (hasDropdown ? toggleAccordion(i) : setMenuOpen(false))}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Link
                      href={list.href}
                      className={`transition-colors duration-300 ${inter.className} text-white`}
                    >
                      {list.name}
                    </Link>
                    {hasDropdown &&
                      (isOpen ? (
                        <ExpandLess className="text-white" />
                      ) : (
                        <ExpandMore className="text-white" />
                      ))}
                  </ListItemButton>
                </ListItem>

                <Collapse in={isOpen} timeout={300} unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 3 }}>
                    {list.dropItem.map((drop, j) => (
                      <ListItem key={j} onClick={() => setMenuOpen(false)} sx={{ pl: 2 }}>
                        <Link
                          href={drop.href}
                          className={`transition-colors duration-300 ${inter.className} text-white`}
                        >
                          {drop.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          })}
        </List>

        {/* Theme Toggle inside Mobile Menu */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded text-sm text-white"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
