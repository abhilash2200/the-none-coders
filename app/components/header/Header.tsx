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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { slideInRight } from "@/lib/animations";

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
          bgcolor: 'var(--color-backgroundSecondary)',
          color: 'var(--color-foreground)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-block', cursor: 'pointer' }}
              >
                <Image
                  src="/assets/img/the-non-coders-logo.webp"
                  alt="logo"
                  width={150}
                  height={100}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
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
                      className={`text-sm px-4 py-4 block transition-colors duration-200 ${inter.className}`}
                      style={{
                        color: 'var(--color-foreground)',
                      }}
                    >
                      {list.name}
                    </Link>
                  </ListItem>

                  {/* Dropdown for desktop */}
                  <AnimatePresence>
                    {list.dropItem.length > 0 && hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <List
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            bgcolor: 'var(--color-card)',
                            zIndex: 50,
                            boxShadow: 'var(--shadow-lg)',
                            borderRadius: 'var(--radius-lg)',
                            minWidth: 200,
                            border: '1px solid var(--color-border)',
                          }}
                        >
                          {list.dropItem.map((drop, j) => (
                            <ListItem key={j} sx={{ px: 2, py: 1 }}>
                              <Link
                                href={drop.href}
                                className={`transition-colors duration-200 ${inter.className}`}
                                style={{
                                  color: 'var(--color-foreground)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = 'var(--color-brand)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = 'var(--color-foreground)';
                                }}
                              >
                                {drop.name}
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              ))}
            </List>
          </Box>

          {/* Theme Toggle Button - Temporarily Hidden */}
          <Box sx={{ display: { xs: "none", lg: "block" }, ml: 2 }}>
            <ThemeToggle variant="button" />
          </Box>

          {/* Mobile Hamburger Icon */}
          <IconButton
            size="large"
            edge="start"
            className="!block lg:!hidden"
            sx={{
              mr: 2,
              color: 'var(--color-foreground)',
            }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1299,
            }}
          />
        )}
      </AnimatePresence>

      {/* Slide-Out Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideInRight}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100vh",
              width: "300px",
              backgroundColor: 'var(--color-background)',
              zIndex: 1300,
              boxShadow: 'var(--shadow-xl)',
              padding: '1rem',
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{ color: 'var(--color-foreground)' }}
                aria-label="Close menu"
              >
                <CloseIcon />
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
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: 'var(--color-foreground)',
                        }}
                      >
                        <Link
                          href={list.href}
                          className={`transition-colors duration-200 ${inter.className}`}
                          style={{
                            color: 'var(--color-foreground)',
                            textDecoration: 'none',
                          }}
                        >
                          {list.name}
                        </Link>
                        {hasDropdown &&
                          (isOpen ? (
                            <ExpandLess sx={{ color: 'var(--color-foreground)' }} />
                          ) : (
                            <ExpandMore sx={{ color: 'var(--color-foreground)' }} />
                          ))}
                      </ListItemButton>
                    </ListItem>

                    <Collapse in={isOpen} timeout={300} unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        {list.dropItem.map((drop, j) => (
                          <ListItem key={j} onClick={() => setMenuOpen(false)} sx={{ pl: 2 }}>
                            <Link
                              href={drop.href}
                              className={`transition-colors duration-200 ${inter.className}`}
                              style={{
                                color: 'var(--color-foreground)',
                                textDecoration: 'none',
                              }}
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

            {/* Theme Toggle inside Mobile Menu - Temporarily Hidden */}
            {/* <Box sx={{ mt: 4, textAlign: "center" }}>
              <ThemeToggle variant="button" />
            </Box> */}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Header;
