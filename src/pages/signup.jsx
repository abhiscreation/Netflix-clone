import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import './signup.css';
import GlobalVideo from "../components/GlobalVideo";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
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
