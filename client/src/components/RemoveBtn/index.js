import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export default function RemoveBtn({ id, removeBook, isRemoving }) {
  const { pathname } = useLocation();

  return (
    <button
      className={pathname === "/saved" ? "btn btn-primary remove" : "d-none"}
      onClick={() => removeBook(id)}
      disabled={isRemoving}
    >
      {isRemoving ? "Removing..." : "Remove"}
    </button>
  );
}
