import React from 'react';
import { ProSidebarProvider } from "react-pro-sidebar";
import Container from 'react-bootstrap/Container';
import CustomSidebar from '../partials/Sidebar'; 

const Dashboard = () => {
    return (
        <ProSidebarProvider>
            <div className="d-flex">
                <CustomSidebar />

                <Container className="dashBoardContainer">
                    <h1>Welcome back, User</h1>
                </Container>
            </div>
        </ProSidebarProvider>
    );
};

export default Dashboard;
