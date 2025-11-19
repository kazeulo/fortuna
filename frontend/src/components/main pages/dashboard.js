import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

// css imports

// icons for sidebar
// import WalletIcon from '@mui/icons-material/Wallet';
// import HomeIcon from '@mui/icons-material/Home';
// import SavingsIcon from '@mui/icons-material/Savings';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Dashboard = () => {
    return (
        <div className="d-flex">
            return (
                <div className="d-flex">
                <Sidebar />

                <Container className="dashBoardContainer">
                    <h1>Welcome back, User</h1>
                </Container>
                </div>
            );
        </div>
    );
};

export default Dashboard;