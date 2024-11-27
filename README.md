# JSON Beautify

## Visão Geral

**Beautify** é uma aplicação web que permite aos usuários formatar (embelezar) códigos JSON de forma rápida e simples. A aplicação é composta por um backend em Flask e um frontend em React, proporcionando uma interface amigável para entrada e visualização de JSON formatado.

## Tecnologias Utilizadas

- **Backend:**
  - Python 3
  - Flask
  - Flask-CORS

- **Frontend:**
  - React
  - JavaScript
  - CSS

## Estrutura do Projeto

```
beautify/
├── backend/
│   ├── Json_Beautify.py
│   └── requirements.txt
├── frontend/
│   ├── beautify-front/
│   │   ├── package.json
│   │   └── src/
│   │     ├── App.js
│   │     ├── App.css
│   │     └── index.js
├── README.md
```

## Configuração e Instalação

### Pré-requisitos

- **Python 3.7+**
- **Node.js e npm**

### Backend (Flask)

1. **Navegue até o diretório do backend:**

   ```bash
   cd backend
   ```

2. **Crie um ambiente virtual:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```

3. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

   *Conteúdo do `requirements.txt`:*

   ```txt
   Flask
   flask-cors
   ```

4. **Inicie o servidor Flask:**

   ```bash
   python app.py
   ```

   O servidor backend estará rodando em `http://localhost:5000`.

### Frontend (React)

1. **Navegue até o diretório do frontend:**

   ```bash
   cd frontend/beautify-front
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação React:**

   ```bash
   npm start
   ```

   A aplicação frontend estará disponível em `http://localhost:3000`.

### Compilando o Frontend para Produção

1. **No diretório do frontend, execute:**

   ```bash
   npm run build
   ```

   Isso criará uma versão otimizada da aplicação React na pasta `build`.

2. **Certifique-se de que o backend Flask está configurado para servir os arquivos estáticos do frontend, conforme o código fornecido.**

## Uso

1. **Acesse a aplicação no navegador:**

   - Frontend: `http://localhost:3000`
   - (Após compilar para produção) `http://localhost:5000`

2. **Na interface, insira o JSON que deseja formatar na seção "Input".**

3. **Clique no botão "Beautify JSON".**

4. **O JSON formatado aparecerá na seção "Output".**

## API

### Endpoint: `/beautify`

- **Método:** `POST`
- **Descrição:** Recebe um JSON bruto e retorna o JSON formatado.
- **Parâmetros:**
  - `input` (string): O JSON a ser formatado.
  
- **Resposta:**
  - **Sucesso (200):**
    ```json
    {
      "status": "success",
      "data": "{\n    \"chave\": \"valor\"\n}"
    }
    ```
  - **Erro (400):**
    ```json
    {
      "status": "error",
      "message": "Error decoding JSON: Expecting value: line 1 column 1 (char 0)"
    }
    ```
