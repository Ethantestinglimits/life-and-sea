import React, { useState } from "react";
import styles from "./AuthPage.module.scss";

const RegisterPage = ({ showRegisterCallback }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(0);

  const [step, setStep] = useState(0);

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
                  placeholder="Prénom"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <div className={styles.spaceH} />
                <input
                  placeholder="Nom"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <div className={styles.spaceH} />
                <button type="button" onClick={() => setLoading(1)}>
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
