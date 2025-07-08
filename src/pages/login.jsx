import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";
import GlobalImage from "../components/GlobalImage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError("No account found with this email. Please sign up first.");
      } else if (err.code === 'auth/wrong-password') {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
     <GlobalImage
          src="/BG_Img.jpg"
          asBackground
        >
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <h2 style={{textAlign:"center",color:"#f1f1f1"}}>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
            {error && <p className="error">{error}</p>}
            <p style={{textAlign: "center", color: "#f1f1f1"}}>
              New to Netflix ?&nbsp;&nbsp;{' '}
              <a href="/signup" style={{color: "#e50914", textDecoration: "underline"}}>Sign up now</a>
            </p>
          </form>
      </div>
    </GlobalImage>
  );
};

export default Login;
