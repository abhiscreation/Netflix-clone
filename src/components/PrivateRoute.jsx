import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return null; // or a spinner if you want
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;