<?php
class GerenciadorPessoas {
    private $conn;
    private $table_pessoa = "pessoa";
    private $table_filho = "filho";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function gravar($data) {
        $this->conn->exec("DELETE FROM " . $this->table_filho);
        $this->conn->exec("DELETE FROM " . $this->table_pessoa);
        $this->conn->beginTransaction();

        try {
            foreach ($data['pessoas'] as $pessoa) {
                $query_pessoa = "INSERT INTO " . $this->table_pessoa . " (nome) VALUES (:nome)";
                $stmt_pessoa = $this->conn->prepare($query_pessoa);
                $stmt_pessoa->bindParam(':nome', $pessoa['nome']);
                $stmt_pessoa->execute();
                $id_pessoa = $this->conn->lastInsertId();

                foreach ($pessoa['filhos'] as $nome_filho) {
                    $query_filho = "INSERT INTO " . $this->table_filho . " (id_pessoa, nome) VALUES (:id_pessoa, :nome)";
                    $stmt_filho = $this->conn->prepare($query_filho);
                    $stmt_filho->bindParam(':id_pessoa', $id_pessoa);
                    $stmt_filho->bindParam(':nome', $nome_filho);
                    $stmt_filho->execute();
                }
            }
            $this->conn->commit();
            return true;
        } catch (Exception $e) {
            $this->conn->rollBack();
            return false;
        }
    }

    public function ler() {
        $query = "SELECT p.id as pessoa_id, p.nome as pessoa_nome, f.nome as filho_nome 
                  FROM " . $this->table_pessoa . " p 
                  LEFT JOIN " . $this->table_filho . " f ON p.id = f.id_pessoa 
                  ORDER BY p.id";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $pessoas = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $pessoa_id = $row['pessoa_id'];
            if (!isset($pessoas[$pessoa_id])) {
                $pessoas[$pessoa_id] = [
                    'nome' => $row['pessoa_nome'],
                    'filhos' => []
                ];
            }
            if ($row['filho_nome']) {
                $pessoas[$pessoa_id]['filhos'][] = $row['filho_nome'];
            }
        }

        return ['pessoas' => array_values($pessoas)];
    }
}