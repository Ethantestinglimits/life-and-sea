import React, { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";
import axios from "@util/axios";

const LoginPage = ({ showRegisterCallback }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(0);

  const login = async () => {
    const resp = await axios.post("auth/local/register", {
      username: "Strapi user",
      email: "user@strapi.io",
      password: "strapiPassword",
    });
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
      <div className={styles.circle} animationLoading={loading}>
        <div className={styles.foregroundCircle}>
          <form autocomplete="off">
            <input
              placeholder="Email"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <div className={styles.spaceH} />
            <input
              placeholder="Mot de passe"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <div className={styles.spaceH} />
            <button type="button" onClick={() => setLoading(1)}>
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
