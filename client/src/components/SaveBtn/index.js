import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";


export default function SaveBtn({ googleId, saveBook }) {
  const { pathname } = useLocation();

  return (
    <button
      className={pathname === "/saved" ? "d-none" : "btn btn-primary save"}
      onClick={() => saveBook(googleId)}
    >
      Save
    </button>
  );
}
