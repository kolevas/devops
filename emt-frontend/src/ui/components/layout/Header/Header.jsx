import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "./Header.css";

const Header = ({loggedInUser, logout}) => {
    const pages = [
        { path: "/books", name: "books" },
        { path: "/authors", name: "authors" },
        { path: "/countries", name: "countries" }
    ];

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ mr: 3 }}>E-LIBRARY</Typography>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: "white" }} >
                            Home
                        </Button>
                    </Link>
                    {loggedInUser && (
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

                            {pages.map((page) => (
                                <Link key={page.name} to={page.path} style={{ textDecoration: "none" }}>
                                    <Button sx={{ color: "white" }} key={page.name}>
                                        {page.name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    )}

                    <Box sx={{ ml: "auto" }}>
                        {loggedInUser ? (
                            <Button sx={{ color: "white" }} onClick={logout}>
                                Logout
                            </Button>
                        ) : (
                            <Link to="/user/login" style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: "white" }}>
                                    Login
                                </Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
