# Sistema de Cadastro com PHP e JSON

Aplicação web desenvolvida como um teste técnico para demonstrar habilidades Full Stack. O sistema implementa as operações de CRUD (Create, Read, Update, Delete) para gerenciar um cadastro de pessoas e seus filhos, utilizando PHP no backend e persistindo os dados em um arquivo JSON.

## Funcionalidades Principais

* Cadastro, visualização e exclusão de pessoas.
* Adição e exclusão de filhos vinculados a uma pessoa.
* Persistência de dados em um arquivo JSON no servidor, que atua como um banco de dados simples.
* Comunicação assíncrona entre o frontend e o backend através de uma API.

## Pilha de Tecnologias

* **Backend:** PHP
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Armazenamento de Dados:** Arquivo JSON

## Instruções para Execução

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

## Estrutura do Projeto

```
.
├── php/
│   ├── Database.php          # Classe para manipulação do arquivo de dados (leitura/escrita).
│   └── GerenciadorPessoas.php# Classe que contém a lógica de negócio para o CRUD de pessoas e filhos.
│
├── api.php                   # Endpoint da API para comunicação com o frontend.
├── index.html                # Arquivo principal da interface do usuário (UI).
├── script.js                 # Lógica do frontend: manipulação de eventos (DOM) e requisições (Fetch API).
└── style.css                 # Folha de estilos da aplicação.
```

## Autor

**Lucas de Oliveira Pereira**

* **GitHub:** `https://github.com/Olikeira`
* **LinkedIn:** `https://www.linkedin.com/in/lucas-de-oliveira-pereira-741936272/`
