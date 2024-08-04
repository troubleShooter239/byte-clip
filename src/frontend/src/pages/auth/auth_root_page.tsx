import React from "react";
import { useLocation } from "react-router-dom";
import SignInPage from "./signin/sigin_page";
import SignUpPage from "./signup/signup_page";

const AuthRootPage = () => {
  const location = useLocation();
  return location.pathname === "/signin" ? (
    <SignInPage />
  ) : location.pathname === "/signup" ? (
    <SignUpPage />
  ) : null;
};

export default AuthRootPage;
