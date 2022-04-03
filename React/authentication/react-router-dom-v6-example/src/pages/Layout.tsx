import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthStatus from "../components/AuthStatus";

export default function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
