import Image from "next/image";
import styles from "./page.module.css";
import { CiCalendar } from "react-icons/ci";
import { RiSpeedLine, RiGovernmentLine } from "react-icons/ri"
import { TbPigMoney, TbAutomation } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
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

        <div className={styles.list_container}>
          <div className={styles.list_title_container}>
            <h1 className={styles.title_list}>A automações sob medida para suas rotinas</h1>
            <p className={styles.subtitle_container}>As plataformas low-code/no-code tornaram-se essenciais para democratizar a hiperautomação, inclusive em empresas de médio porte. Essa tecnologia permite que usuários desenvolvam automações sob medida para suas rotinas, garantindo agilidade, controle e alinhamento às diretrizes corporativas.</p>
            <p className={styles}>A plataforma apresenta diversos benefícios:</p>
          </div>

          <div className={styles.list}>
            <div className={styles.list_li}>
              <div className={styles.icon_list}>
                <RiSpeedLine />
              </div>
              <h2>Agilidade</h2>
              <p>Aceleração significativa no tempo de desenvolvimento e implantação.</p>
            </div>
            <div className={styles.list_li}>
              <div className={styles.icon_list}>
                <TbPigMoney />
              </div>
              <h2>Redução de custos</h2>
              <p>Menor dependência de equipes externas.</p>
            </div>
            <div className={styles.list_li}>
              <div className={styles.icon_list}>
                <TbAutomation />

              </div>
              <h2>Autonomia e inovação</h2>
              <p>Maior protagonismo das áreas de negócio.</p>
            </div>
            <div className={styles.list_li}>
              <div className={styles.icon_list}>
                <RiGovernmentLine />

              </div>
              <h2>Governança</h2>
              <p>Maior protagonismo das áreas de negócio.</p>
            </div>
            <div className={styles.list_li}>
              <div className={styles.icon_list}>
                <GoGraph />

              </div>
              <h2>Escalabilidade</h2>
              <p>Adaptação simples e segura conforme o crescimento da empresa.</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
