import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import {
    Typography, Grid, Divider, Box, CircularProgress
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdmissionPage() {
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
            <Typography variant="h4" style={{ marginLeft: "2em" }}>Admission Page</Typography>
            <br />
            <Divider></Divider>
            <br />
            <Typography variant="h6" style={{ marginLeft: "4em" }}>Admission process:</Typography>
            <Box style={{ marginLeft: "4em" }}>

                <ul>
                    <li>Understanding Admission Requirements</li>
                    <li>Submit application online</li>
                    <li>Upload supporting documents</li>
                    <li>Make application fee payment</li>
                    <li>Check application status</li>
                </ul>
            </Box>

        </>
    );
}