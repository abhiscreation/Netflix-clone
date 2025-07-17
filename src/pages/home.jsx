import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  // Remove old handleLogout and button, Navbar handles it now
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#141414', color: '#fff' }}>
      <Navbar />
      <div style={{ paddingTop: 80, textAlign: 'center', fontSize: '2rem' }}>
        Welcome to the Home Page!
      </div>
    </div>
  );
};

export default Home;
