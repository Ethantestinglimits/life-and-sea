import React, { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";

const LoginPage = ({ showRegisterCallback }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(0);

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
<<<<<<< HEAD
        
          <form autocomplete="off">
=======
          <form autoComplete="off">
>>>>>>> front
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
