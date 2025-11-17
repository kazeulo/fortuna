import React from 'react';
import Container from 'react-bootstrap/Container';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

// css imports
import '../../css/partials/sidebar.css';

// icons for sidebar
import WalletIcon from '@mui/icons-material/Wallet';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const dashboard = () => {
    return (
        <div className="d-flex">
            <Sidebar className="sidebar vh-100">
                <Menu>
                    <MenuItem> <HomeIcon /> Dashboard </MenuItem>
                    <MenuItem> <FormatListBulletedIcon /> Transactions </MenuItem>
                    <MenuItem> <SavingsIcon /> Savings </MenuItem>
                    <MenuItem> <WalletIcon /> Investments </MenuItem>
                </Menu>
            </Sidebar>

            <Container className="dashBoardContainer">

            <h1>Welcome back, User</h1>
            </Container>
        </div>
    );
};

export default dashboard;