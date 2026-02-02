"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { CiCalendar } from "react-icons/ci";
import { RiSpeedLine, RiGovernmentLine } from "react-icons/ri"
import { TbPigMoney, TbAutomation } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import ReactPlayer from 'react-player'

import Cadastros from "./models/cadastros";

import { use, useEffect, useState } from 'react';

const cadastros = new Cadastros();

export default function Home() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [setor, setSetor] = useState('');
  const [status, setStatus] = useState('');
  const [detalhe, setDetalhe] = useState('');

  const handlesubimit = async () => {
    console.log("passou aq");

    const novoCadastro = {
      nome, telefone, email, cargo, empresa, cnpj, setor, status, detalhe
    };
    cadastros.addCadastro(novoCadastro);
    console.log(cadastros.getCadastros());
    clearFields();

  }

  const clearFields = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setCargo('');
    setEmpresa('');
    setCnpj('');
    setSetor('');
    setStatus('');
    setDetalhe('')
  }

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
            <h1 className={styles.title_list}>A <strong>automações sob medida para suas rotinas</strong></h1>
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

        <div className={styles.crud_container}>
          <div className={styles.input_container1}>
            <label>Nome Completo</label>
            <input className={styles.input} type="text" name="nome" placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} ></input>
          </div>

          <div className={styles.input_container1}>
            <label>
              Telefone
            </label>
            <input className={styles.input} type="text" name="telefone" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} ></input>
          </div>

          <div className={styles.input_container1}>
            <label>
              E-mail
            </label>
            <input className={styles.input} type="text" name="email" placeholder="Digite seu melhor e-mail" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
          </div>

          <div className={styles.input_container1}>
            <label>
              Cargo 
            </label>
            <input className={styles.input} type="text" name="cargo" placeholder="Digite seu cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} ></input>
          </div>

          <div className={styles.input_container2}>
            <label>
              Nome da Empresa
            </label>
            <input className={styles.input} type="text" name="empresa" placeholder="Digite sua empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} ></input>
          </div>

          <div className={styles.input_container1}>
            <label>
              CNPJ
            </label>
            <input className={styles.input} type="text" name="cnpj" placeholder="Digite seu cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} ></input>
          </div>

          <div className={styles.input_container1}>
            <label>
              Setor 
            </label>
            <input className={styles.input} type="text" name="setor" placeholder="Digite seu setor" value={setor} onChange={(e) => setSetor(e.target.value)} ></input>
          </div>

          <div className={styles.input_container2}>
            <label>
              Status 
            </label>
            <input className={styles.input} type="text" name="status" placeholder="Digite seu status" value={status} onChange={(e) => setStatus(e.target.value)} ></input>
          </div>

          <div className={styles.input_container}>
            <label>
              Detalhe sua demanda
            </label>
            <input className={styles.detalhes_input} type="text" name="detalhe" placeholder="Digite aqui" value={detalhe} onChange={(e) => setDetalhe(e.target.value)} ></input>
          </div>

          <div>
            <h1>SELECT</h1>
            <button onClick={() => handlesubimit()}>Cadastrar-se</button>
          </div>
        </div>

      </div>
    </main>
  );
}
