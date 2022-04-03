import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import ProtectedPage from "../pages/ProtectedPage";
import PublicPage from "../pages/PublicPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}