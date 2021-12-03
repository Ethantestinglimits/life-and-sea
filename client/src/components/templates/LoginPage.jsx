import React, { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";
import axios from "@util/axios";
import { useCookies } from "react-cookie";

const LoginPage = ({ showRegisterCallback }) => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(0);

  const login = async () => {
    try {
      const resp = await axios.axiosPublic.post("/auth/local", {
        identifier: email,
        password: password,
      });
      setCookie("user", JSON.stringify(resp.data.jwt), {
        path: "/",
        maxAge: 3600,
        sameSite: true,
      });
      setLoading(0);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.ripple_header}>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
        <div className={styles.ripple}></div>
      </div>
      <div className={styles.circle} animationloading={loading}>
        <div className={styles.foregroundCircle}>
          <form autoComplete="off">
            <input
              placeholder="Email"
              type="text"
              name="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className={styles.spaceH} />
            <input
              placeholder="Mot de passe"
              type="text"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className={styles.spaceH} />
            <button
              type="button"
              onClick={() => {
                setLoading(1);
                login();
              }}
            >
              Se connecter
            </button>
            <p onClick={() => (loading ? null : showRegisterCallback(true))}>
              Pas encore inscrit ?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
