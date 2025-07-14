import React, { useContext, createContext, useState, useEffect } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes with Supabase
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session?.user || null);
    });
    // Set initial user
    supabase.auth.getUser().then(({ data: { user } }) => setCurrentUser(user));
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const value = { currentUser, setCurrentUser };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
