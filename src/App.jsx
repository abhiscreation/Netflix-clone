import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import ChildrenHome from "./pages/childrenhome";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./context/Authcontext";
import ProfileSelector from "./pages/ProfileSelector";
import EmailConfirmed from "./pages/EmailConfirmed";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/childrenhome" element={<PrivateRoute><ChildrenHome/></PrivateRoute>} />
          <Route path="/ProfileSelector" element={<PrivateRoute><ProfileSelector/></PrivateRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/email-confirmed" element={<EmailConfirmed />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
