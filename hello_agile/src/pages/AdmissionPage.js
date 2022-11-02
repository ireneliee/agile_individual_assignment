import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Typography, Grid, Divider, Box, CircularProgress
} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AdmissionPage() {
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