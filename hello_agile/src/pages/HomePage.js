import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import '../index.css';
import { Typography, Grid, Divider, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import NUSLogo from '../assets/NUSLogo.jpg';
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationContainer from "../firebase";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function HomePage() {
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
            <Typography variant="h4" style={{ marginLeft: "2em" }}>Website Homepage</Typography>
            <br />
            <Divider></Divider>
            <center>
                <img src={NUSLogo} width="50%" />
                <Typography variant="h6">NUS is a leading research university in Asia</Typography>
            </center>

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