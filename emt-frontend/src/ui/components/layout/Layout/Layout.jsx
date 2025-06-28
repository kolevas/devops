import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router";
import "./Layout.css";
import {useAuth} from "../../../../context/AuthContext";

const Layout = () => {
    const { loggedInUser, logout } = useAuth();
    useEffect(() => {
        console.log("User login status changed: ", loggedInUser)
    }, [loggedInUser]);

    return (
        <Box className="layout-box">
            <Header loggedInUser = {loggedInUser}  logout = {logout}/>
            <Container className="outlet-container" sx={{my: 2}} maxWidth="lg">
                <Outlet/>
            </Container>
        </Box>
    );
};

export default Layout;
