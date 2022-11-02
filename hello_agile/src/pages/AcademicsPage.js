
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    Typography, Grid, Divider, Paper, TableRow, TableContainer,
    Table, TableHead, TableCell, TableBody, CircularProgress
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationContainer from "../firebase";


export default function AcademicPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            toast.info("Successfully logged in.");
        }

        if (error) {
            console.log('Result ' + JSON.stringify(error));
            toast.error("Unable to logged in : " + error.message);
        }
    }, [user, loading]);
    return (
        <>
            <NotificationContainer></NotificationContainer>
            <Typography variant="h4" style={{ marginLeft: "2em" }}>Academics Page</Typography>
            <br />
            <Divider></Divider>
            <div style={{ padding: "2%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: "orange" }}>
                            <TableRow>
                                <TableCell>Module Code</TableCell>
                                <TableCell>Module Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>BT1101</TableCell>
                                <TableCell>Introduction to Business Analytics</TableCell>

                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>BT2101</TableCell>
                                <TableCell>Econometrics Modelling for Business Analytics</TableCell>

                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>BT2102</TableCell>
                                <TableCell>Data Management and Visualisation</TableCell>

                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>BT2103</TableCell>
                                <TableCell>Optimization Methods in Business Analytics</TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="login">
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        className="login__btn"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <button className="login__btn login__google" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                    <div>
                        <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>
        </>
    );
}