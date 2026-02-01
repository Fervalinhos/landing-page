import Image from "next/image";
import styles from "./page.module.css";
import { CiCalendar } from "react-icons/ci";
import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <main className={styles.main_page}>
      <div className={styles.page}>

        <div className={styles.information_container}>
          <div className={styles.container_flex}>
            <div className={styles.text_information_container}>
              <h1 className={styles.title}>e-Pier</h1>
              <h2 className={styles.subtitle}>a plataforma digital que integra</h2>
              <h2 className={styles.text_especial}>O seguro, agil e flexivel</h2>
              <h3 className={styles.texts_information_container}>Fluxos inteligentes, decisões baseadas em regras e dados operacionais;</h3>
              <h3 className={styles.texts_information_container}>Acessível nativamente pelo navegador.</h3>
            </div>
            <div className={styles.yt_container}>
              <ReactPlayer src='https://www.youtube.com/watch?v=7BWRS1zCyK4' style={{
                width: "100%",
                height: "100%",
                "--controls": "none",
              }} />
            </div>
          </div>


          <button className={styles.button}>
            <CiCalendar className={styles.calendar_icon} />
            <p>solicitar demonstração</p>
          </button>

        </div>

      </div>
    </main>
  );
}
