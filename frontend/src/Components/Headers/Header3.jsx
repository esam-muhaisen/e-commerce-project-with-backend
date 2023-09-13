import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

const data = [
  { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
  { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "full screen menu",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
  {
    mainLink: "user account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
  {
    mainLink: "vendor account",
    subLinks: ["Link 1", "Link 2", "Link 3"],
  },
];

const Header3 = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
        pb:2
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WindowIcon />
            Dashboard
          </Typography>
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // @ts-ignore
          sx={{
            ".MuiPaper-root": {
              width: "200px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper.MuiDrawer-paper":
            {
              height: "100%",
            },
          ".css-1qdun2q-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.5s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <Close />
          </IconButton>

          {data.map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLinks.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
