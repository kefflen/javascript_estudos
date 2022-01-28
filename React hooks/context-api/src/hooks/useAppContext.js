import { useContext } from "react";
import AppContext from "../context/appContext";


export default function useAppContext() {
  return useContext(AppContext)
}

