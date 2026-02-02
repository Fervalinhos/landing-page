# e-Pier – Plataforma Digital de Automação

O **e-Pier** é uma aplicação web desenvolvida com **Next.js** e **React**, voltada para a apresentação institucional de uma plataforma digital de automação low-code/no-code.  
A aplicação permite divulgar a proposta de valor do produto, apresentar benefícios, exibir um vídeo demonstrativo e coletar informações de usuários interessados por meio de um formulário de cadastro.

---

## 📌 Visão Geral

A aplicação é composta por uma única página principal que reúne:

- Conteúdo institucional da plataforma e-Pier
- Vídeo demonstrativo incorporado do YouTube
- Lista de benefícios da solução
- Formulário de cadastro para solicitação de demonstração
- Armazenamento local dos cadastros via classe de modelo

---

## 🧱 Tecnologias Utilizadas

- **Next.js 13+** (App Router)
- **React**
- **JavaScript**
- **CSS Modules**
- **React Icons**
- **React Player**

---

## 🔧 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)  
  [Download Node.js](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- Navegador moderno (Chrome, Edge, Firefox, Safari)

## 📁 Estrutura de Pastas

```bash
src/
├── app/
│   ├── page.jsx              # Página principal da aplicação
│   ├── page.module.css       # Estilos da página
│   └── models/
│       └── cadastros.js      # Classe responsável pelo gerenciamento de cadastros

