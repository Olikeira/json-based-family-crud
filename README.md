<h1 align="center">
   Sistema de Cadastro Familiar com PHP e JSON
</h1>

<p align="center">
  <img alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades-principais">Funcionalidades</a> •
  <a href="#-demonstração-visual">Demonstração</a> •
  <a href="#️-pilha-de-tecnologias">Tecnologias</a> •
  <a href="#-instruções-para-execução">Execução</a> •
  <a href="#-autor">Autor</a>
</p>

## Sobre o Projeto

Aplicação web desenvolvida como um teste técnico para demonstrar habilidades Full Stack. O sistema implementa as operações de **CRUD** (Create, Read, Update, Delete) para gerenciar um cadastro de pessoas e seus filhos, utilizando **PHP** no backend e persistindo os dados em um arquivo **JSON**.

## Funcionalidades Principais

* **Cadastro, visualização e exclusão** de pessoas.
* **Adição e exclusão de filhos** vinculados a uma pessoa.
* **Persistência de dados** em um arquivo JSON no servidor, que atua como um banco de dados simples.
* **Comunicação assíncrona** entre o frontend e o backend através de uma API.

## Demonstração Visual

<p align="center">
  <img src="https://github.com/user-attachments/assets/1b7ec827-95af-43a2-93fa-3966c066bbdb" alt="Screenshot da interface da aplicação, mostrando a lista de pessoas e a estrutura JSON." width="800">
</p>

##  Pilha de Tecnologias

* **Backend:** PHP
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Armazenamento de Dados:** Arquivo JSON

##  Instruções para Execução

**Pré-requisitos:**
* Um ambiente de servidor local com suporte a PHP (XAMPP, WAMP, Docker, etc.).

**Passos:**

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone [https://github.com/Olikeira/json-based-family-crud.git](https://github.com/Olikeira/json-based-family-crud.git)
    ```
2.  Mova a pasta do projeto para o diretório raiz do seu servidor web (ex: `htdocs` no XAMPP).

3.  Inicie o serviço Apache a partir do seu painel de controle.

4.  Acesse a aplicação através do seu navegador no endereço: `http://localhost/json-based-family-crud/`

## 📂 Estrutura do Projeto
```
.
├── php/
│   ├── Database.php           # Classe para manipulação do arquivo de dados.
│   └── GerenciadorPessoas.php # Classe com a lógica de negócio (CRUD).
│
├── api.php                    # Endpoint da API para comunicação com o frontend.
├── index.html                 # Arquivo principal da interface do usuário (UI).
├── script.js                  # Lógica do frontend (eventos e requisições).
└── style.css                  # Folha de estilos da aplicação.
```

## Autor

**Lucas de Oliveira Pereira**

* GitHub: [`Olikeira`](https://github.com/Olikeira)
* LinkedIn: [`lucas-de-oliveira-pereira-741936272`](https://www.linkedin.com/in/lucas-de-oliveira-pereira-741936272/)
