import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import '../index.css';
import { Typography, Grid, Divider, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import NUSLogo from '../assets/NUSLogo.jpg';
import { Link, useNavigate } from "react-router-dom";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function HomePage() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (user) {
    //         toast.info("Successfully logged in.");
    //     }
    //     if (error) {
    //         console.log('Result ' + JSON.stringify(error));
    //         toast.error("Unable to logged in : " + error.message);
    //     }
    // }, [user, loading]);

    return (
        <>
            <ToastContainer />
            <Typography variant="h4" style={{ marginLeft: "2em" }}>Website Homepage</Typography>
            <br />
            <Divider></Divider>
            <center>
                <img src={NUSLogo} width="50%" />
                <Typography variant="h6">NUS is a leading research university in Asia</Typography>
            </center>



        </>
    );
}