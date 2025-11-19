import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SavingsIcon from "@mui/icons-material/Savings";
import WalletIcon from "@mui/icons-material/Wallet";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import '../../css/partials/sidebar.css';

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const CustomSidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <Box
      sx={{
        height: "100vh",
        position: "sticky",
        top: 0,
        "& .sidebar": {
          border: "none !important",
        },
        "& .menu-item": {
          background: "transparent !important",
        },
        "& .menu-item:hover": {
          color: "#6ab7ff !important",
        },
        "& .menu-item.active": {
          color: "#00e676 !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        backgroundColor="var(--dark-color)"
        className="sidebar"
      >
        <Menu>
          {/* Collapse Button */}
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={collapseSidebar} />
              ) : (
                <CloseOutlinedIcon
                  onClick={broken ? toggleSidebar : collapseSidebar}
                />
              )
            }
            style={{ margin: "10px 0 20px 0" }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
              >
                <Typography variant="h4" color="#fff">
                  Finance
                </Typography>
                <IconButton
                  onClick={broken ? toggleSidebar : collapseSidebar}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* MENU ITEMS */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>

            <Item
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Transactions"
              to="/transactions"
              icon={<FormatListBulletedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Savings"
              to="/savings"
              icon={<SavingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Investments"
              to="/investments"
              icon={<WalletIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomSidebar;