import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#141414', color: '#fff' }}>
      <button
        onClick={handleLogout}
        style={{
          position: 'absolute', top: 20, right: 20, background: '#e50914', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1.2rem', fontWeight: 'bold', cursor: 'pointer', zIndex: 2
        }}
      >
        Logout
      </button>
      <div style={{ paddingTop: 80, textAlign: 'center', fontSize: '2rem' }}>
        Welcome to the Home Page!
      </div>
    </div>
  );
};

export default Home;
