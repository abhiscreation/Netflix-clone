import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";
import GlobalImage from "../components/GlobalImage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // On mount, check for remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("netflix_remembered_email");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (rememberMe) {
      localStorage.setItem("netflix_remembered_email", email);
    } else {
      localStorage.removeItem("netflix_remembered_email");
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/ProfileSelector");
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.6rem 0' }}>
            <label style={{ color: '#b3b3b3', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', lineHeight: 1 }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  style={{ verticalAlign: 'middle', accentColor: '#e50914', width: '18px', height: '18px' }}
                />
                <span style={{ verticalAlign: 'middle', position: 'relative', bottom: '6px' }}>Remember me</span>
              </label>
              <a href="#" style={{ color: '#b3b3b3', fontSize: '0.95rem', textDecoration: 'none' }}>Need help?</a>
            </div>
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
