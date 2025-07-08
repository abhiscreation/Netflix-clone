import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./context/Authcontext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
