import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Navbar from "../components/Headerr";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  // Remove old handleLogout and button, Navbar handles it now
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#141414', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ paddingTop: 80, textAlign: 'center', fontSize: '2rem', flex: 1 }}>
        Welcome to the Home Page!
        Browse for movies, TV shows, and more.
      </div>
      <Footer />
    </div>
  );
};

export default Home;
