import React, { useState } from "react";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className={styles.layout}>
      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={setFirstName}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={setLastName}
        />
      </form>
    </div>
  );
};

export default AuthPage;
