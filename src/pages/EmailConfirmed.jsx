import React from "react";
import GlobalImage from "../components/GlobalImage";
import "./login.css";

const EmailConfirmed = () => {
  return (
    <GlobalImage src="/BG_Img.jpg" asBackground>
      <div className="login-container">
        <div style={{
          background: "rgba(0,0,0,0.75)",
          padding: "2rem 2.5rem",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "3rem auto",
          textAlign: "center"
        }}>
          <img src="/Netflix_logo.png" alt="Netflix Logo" style={{ width: "150px", marginBottom: "1.5rem" }} />
          <h2 style={{ color: "#f1f1f1", marginBottom: "1rem" }}>Email Confirmed!</h2>
          <p style={{ color: "#b3b3b3", marginBottom: "2rem" }}>
            Your email has been successfully verified.<br />
            You can now sign in to your account.
          </p>
          <a href="/login" style={{
            display: "inline-block",
            background: "#e50914",
            color: "#fff",
            padding: "0.75rem 2rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem"
          }}>
            Go to Sign In
          </a>
        </div>
      </div>
    </GlobalImage>
  );
};

export default EmailConfirmed; 