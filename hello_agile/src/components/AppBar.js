import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import "../App.css";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Appbar() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);



    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                    <nav className="navbar">
                        <div className="navbar-container">
                            <ul className={"nav-menu"}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-links">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/academics" className="nav-links">
                                        Academics
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admission" className="nav-links">
                                        Admission
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </AppBar>
            </Box>
            <div style={{ height: "150px" }}></div>
        </>
    );
}