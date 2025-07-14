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
    // First, try to sign in with the provided email and password
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (!signInError) {
      setError("This email is already registered. Please sign in.");
      return;
    } else if (signInError.message.toLowerCase().includes("invalid login credentials")) {
      // Email exists but password is wrong
      setError("This email is already registered. Please sign in.");
      return;
    } else if (signInError.message.toLowerCase().includes("user not found")) {
      // User does not exist, proceed to sign up
      const { error: signUpError } = await supabase.auth.signUp({ email, password });
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      navigate("/ProfileSelector");
    } else {
      setError(signInError.message);
    }
  };

  return (
    <GlobalVideo src="https://www.w3schools.com/howto/rain.mp4">
      <div className="signup-container">   
      <form onSubmit={handleSignup}>
        <img src="/Netflix_logo.png" alt="Netflix Logo" style={{ display: 'block', margin: '0 auto 1rem', width: '180px', maxWidth: '80vw' }} />
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
