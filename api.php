<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

include_once 'php/Database.php';
include_once 'php/GerenciadorPessoas.php';

$database = new Database();
$db = $database->getConnection();
$gerenciador = new GerenciadorPessoas($db);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $json_data = json_decode(file_get_contents("php://input"), true);
        
        if ($gerenciador->gravar($json_data)) {
            http_response_code(200);
            echo json_encode(["message" => "Dados gravados com sucesso."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Erro ao gravar os dados."]);
        }
        break;

    case 'GET':
        $dados = $gerenciador->ler();
        http_response_code(200);
        echo json_encode($dados);
        break;

    default:
        http_response_code(405);
        echo json_encode(["message" => "Método não permitido."]);
        break;
}