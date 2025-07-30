// src/app/auth/auth-context.tsx
'use client';

// This is a placeholder file to prevent build errors.
// Firebase authentication has been removed.

import { createContext, useContext, ReactNode } from 'react';

// Define a minimal context type.
interface AuthContextType {
  user: null; 
  loading: boolean;
}

// Create the context with default values.
const AuthContext = createContext<AuthContextType>({ user: null, loading: false });

// The AuthProvider now simply renders its children without any Firebase logic.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={{ user: null, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can still be used, but it will always return a non-loading, null user state.
export const useAuth = () => useContext(AuthContext);
