import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
export default function MyAppBar() {
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar className="z-40" position="sticky">
        <Toolbar className="flex bg-zinc-900 justify-between items-center py-4">
          <Typography variant="h6" fontWeight={600}>
            All Pdfs
          </Typography>
          <IconButton onClick={() => setOpenMenu(!OpenMenu)}>
            {!OpenMenu ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={OpenMenu}
        onClose={() => setOpenMenu(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText>Home Page</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton href="/login">
            <ListItemIcon>
              <AdminPanelSettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText>Admin Pannel</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
