import Image from "next/image";
import styles from "./page.module.css";
import { CiCalendar } from "react-icons/ci";

export default function Home() {
  return (
    <main className={styles.main_page}>
      <div className={styles.page}>
        <h1>e-Pier</h1>
        <div>
          <h2>a plataforma digital que integra</h2>
          <h2>O seguro, agil e flexivel</h2>
        </div>

        <div>
          <h3>Criar fluxos inteligentes com decisões baseadas em regras e dados operacionais;</h3>
          <h3>Conceder autonomia às áreas de negócio, com total alinhamento à governança corporativa.</h3>
        </div>

        <button><CiCalendar />solicitar demonstração</button>
      </div>
    </main>
  );
}
