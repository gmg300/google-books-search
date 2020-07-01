import React from "react";
import "./style.css";

export default function SearchBar({ handleInputChange }) {
  return (
    <form>
      <div className="form-group mb-4">
        <input
          id="exampleFormControlInput1"
          type="email"
          placeholder="Find books..."
          className="form-control form-control-underlined"
          onChange={handleInputChange}
        />
      </div>
    </form> 
  );
}
