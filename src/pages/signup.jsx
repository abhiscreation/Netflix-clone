import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
import GlobalVideo from "../components/GlobalVideo";
import { supabase } from "../supabase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    // Try to sign up directly
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      if (signUpError.message.toLowerCase().includes("already registered") || signUpError.message.toLowerCase().includes("user already exists")) {
        setError("This email is already registered. Please sign in.");
      } else {
        setError(signUpError.message);
      }
      return;
    }
    // Optionally, you may want to check for email confirmation here
    navigate("/email-confirmed");
  };

  return (
    <GlobalVideo src="/signup_bg.mp4" playbackRate={0.8}>
      <div className="signup-container">   
      <form onSubmit={handleSignup}>
        <img src="/Netflix_logo.png" alt="Netflix Logo" style={{ display: 'block', margin: '0 auto 2rem', width: '180px', maxWidth: '80vw' }} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
          <p style={{textAlign: "center", color: "#f1f1f1", marginTop: "1rem"}}>
            Already a member?{' '}
            <a href="/login" style={{color: "#e50914", textDecoration: "underline"}}>Sign in</a>
          </p>
        </form>
      </div>
    </GlobalVideo>
  );
};

export default Signup;
