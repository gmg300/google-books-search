import React from "react";
import "./style.css";

export default function SaveBtn({ link }) {
  return (
    <a
      className="btn btn-primary view"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </a>
  );
}
