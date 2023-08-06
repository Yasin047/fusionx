import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Button = ({ styles }) => {
  const navigate = useNavigate();
  return <button onClick={() => {
    navigate("/dapp");
  }} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Launch Dapp
  </button>

}

export default Button;