import React, { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
const Authentication = () => {
  const [isLogging, setIsLogging] = useState(true);

  const changeForm = () => {
    setIsLogging(!isLogging);
  };

  let form = <></>;
  if (isLogging) {
    form = <LoginForm changeForm={changeForm} />;
  } else {
    form = <RegisterForm changeForm={changeForm} />;
  }
  return <>{form}</>;
};

export default Authentication;
