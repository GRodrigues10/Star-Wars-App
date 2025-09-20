# 🌌 StarApp

O **StarApp** é uma enciclopédia online de **Star Wars**, desenvolvida como projeto **full stack**. Ele reúne informações sobre filmes, séries, documentários e conteúdos expandidos do universo criado por George Lucas.

O projeto é dividido em duas partes:  
- **Frontend (Next.js/React)** → Interface com autenticação, cadastro e navegação imersiva.  
- **Backend (API própria)** → API REST construída do zero para servir dados de filmes e conteúdos relacionados (testada com **Insomnia**).


---

## 🚀 Tecnologias

### Frontend
- [Next.js](https://nextjs.org/)  
- [React](https://react.dev/)  
- [styled-components](https://styled-components.com/)  
- LocalStorage (persistência simples de usuários)  

### Backend
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [MongoDB ou PostgreSQL] *(dependendo do que você usou, só trocar aqui)*  
- API REST construída para retornar dados dos filmes  

---

## 📸 Funcionalidades

✅ Tela de **Login** e **Cadastro** com validação e persistência de dados.  
✅ Senha com alternância **🙈 / 🙉** para exibir/ocultar no input.  
✅ Fundo animado com **estrelas em movimento**.  
✅ Consumo da **API StarApp** para listar filmes.  
✅ Interface responsiva e moderna.  
✅ Estrutura para expansão (abas de planetas, personagens, séries etc).  

---

## ⚙️ Como rodar o projeto

### 1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/starapp.git

# 2. Acesse a pasta do projeto
cd star-wars-app

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
