import Link from "next/link";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";
import { NavItem } from "./NavBar";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const GOLD = "#B8962E";
const GOLD_HOVER = "rgba(184,150,46,0.10)";
const PAGE = "#FAFAFA";
const NAVBAR = "#1C1C1C";
const FAINT_BORDER = "rgba(255,255,255,0.06)";

export function Sidebar({ isOpen, onClose, navItems }: SidebarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose} PaperProps={{ sx: { backgroundColor: NAVBAR, color: PAGE } }}>
      <Box className="flex flex-col h-full px-3" style={{ width: 360 }}>
        <Box className="flex items-center justify-center p-3" sx={{ borderBottom: `1px solid ${FAINT_BORDER}` }}>
          <Link href="/" passHref>
            <Box component="img" src="/images/logo-savitronai.svg" alt="Savitron.ai" style={{ height: 40, width: "auto" }} />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <List>
            {navItems.map((item) => {
              const Icon = item.Icon || WorkIcon;
              const hasDropdown = Boolean(item.dropdown);

              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={hasDropdown ? () => handleDropdownToggle(item.label) : onClose}
                    sx={{
                      color: PAGE,
                      "&:hover": { bgcolor: GOLD_HOVER, color: GOLD, "& .MuiListItemIcon-root": { color: GOLD } },
                      borderBottom: `1px solid ${FAINT_BORDER}`,
                    }}
                    component={!hasDropdown ? Link : "div"}
                    href={!hasDropdown ? item.to : undefined}
                  >
                    <ListItemIcon sx={{ color: GOLD, minWidth: 36 }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
                    {hasDropdown && (openDropdown === item.label ? <ExpandLess sx={{ color: GOLD }} /> : <ExpandMore sx={{ color: PAGE }} />)}
                  </ListItemButton>

                  {hasDropdown && (
                    <Collapse in={openDropdown === item.label} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        {item.dropdown!.map((sub) => (
                          <Link key={sub.to} href={sub.to} passHref onClick={onClose}>
                            <ListItemButton sx={{ color: "rgba(250,250,250,0.75)", "&:hover": { bgcolor: GOLD_HOVER, color: GOLD } }}>
                              <ListItemText primary={sub.label} primaryTypographyProps={{ fontSize: 13 }} />
                            </ListItemButton>
                          </Link>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
