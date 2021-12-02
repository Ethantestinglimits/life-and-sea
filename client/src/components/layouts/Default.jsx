import styles from "./Default.module.sass";
import Header from "@module/Header/Header";

export default function Default({ children }) {
  return (
    <>
      <div className={styles.default}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>

      <div id="cursorCircle"></div>
    </>
  );
}