import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main_page}>
      <div className={styles.page}>
        <a>Landing Page</a>
      </div>
    </main>
  );
}
