import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appWrite/auth";
import { logOut } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logOut().then(() => dispatch(logOut()));
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      LogOut
    </button>
  );
}

export default LogoutBtn;
