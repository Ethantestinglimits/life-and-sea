import LoginPage from "@template/LoginPage";
import RegisterPage from "@template/RegisterPage";
import { useState } from "react";

const Auth = ({}) => {
  const [showRegister, setShowRegister] = useState(false);
  return showRegister ? (
    <RegisterPage showRegisterCallback={setShowRegister} />
  ) : (
    <LoginPage showRegisterCallback={setShowRegister} />
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Auth;
