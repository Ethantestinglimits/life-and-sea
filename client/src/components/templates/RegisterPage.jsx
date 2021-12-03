import React, { useState } from "react";
import styles from "./AuthPage.module.scss";
import axios from "@util/axios";

const RegisterPage = ({ showRegisterCallback }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(0);

  const [step, setStep] = useState(0);

  const register = async () => {
    try {
      const resp = await axios.axiosPublic.post("/auth/local/register", {
        username: username,
        email: email,
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
            {step == 0 ? (
              <>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
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
                <button type="button" onClick={() => setStep(1)}>
                  S'enregistrer
                </button>
              </>
            ) : (
              <>
                <input
                  placeholder="Pseudo"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <div className={styles.spaceH} />
                <div className={styles.spaceH} />
                <button
                  type="button"
                  onClick={() => {
                    setLoading(1);
                    register();
                  }}
                >
                  Confirmer
                </button>
              </>
            )}
            <p onClick={() => (loading ? null : showRegisterCallback(false))}>
              Se connecter ?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
