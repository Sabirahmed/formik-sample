import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/");
  };
  return (
    <div className="page">
      <h1>Page not found</h1>
      <button
        className="btn btn-primary mt-3 ml-3"
        onClick={handleBtnClick}
        type="button"
      >
        Click here to goto home page
      </button>
    </div>
  );
};
