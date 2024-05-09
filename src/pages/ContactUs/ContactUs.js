import React from "react";
import { useNavigate } from "react-router-dom";
export default function ContactUs() {
  const navigate = useNavigate();
  const handelNavigation = () => {
    navigate("/aboutus");
  };
  return (
    <>
      <div>ContactUs</div>
      <button
        className="btn-btn-warning"
        onClick={() => {
          handelNavigation();
        }}
      >
        Go To aboutus
      </button>
    </>
  );
}
