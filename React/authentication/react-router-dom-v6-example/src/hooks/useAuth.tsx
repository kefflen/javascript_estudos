import React from "react";
import { AuthContext } from "src/contexts/AuthContext";

export default function useAuth() {
  return React.useContext(AuthContext);
}