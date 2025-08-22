<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta CEP - Atividade Prática 2</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
          crossorigin="anonymous">
    
    <!-- CSS personalizado -->
    <link href="resources/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="index.htm">
                <i class="fas fa-code"></i> Projeto Java Web
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.htm">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="endereco.htm">Consulta CEP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cadastro.htm">Cadastro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Conteúdo principal -->
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <h4 class="card-title mb-0">
                            <i class="fas fa-map-marker-alt"></i> Consulta de Endereço por CEP
                        </h4>
                        <small>Atividade Prática 2 - HTML5, JavaScript e Bootstrap</small>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-4">
                            Digite o CEP para consultar automaticamente o endereço através da API ViaCEP.
                        </p>

                        <form id="formEndereco">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cep" class="form-label">CEP *</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i class="fas fa-search"></i>
                                        </span>
                                        <input type="text" 
                                               class="form-control" 
                                               id="cep" 
                                               name="cep" 
                                               placeholder="00000-000"
                                               maxlength="9"
                                               required>
                                        <button type="button" 
                                                class="btn btn-outline-primary" 
                                                id="btnConsultar">
                                            Consultar
                                        </button>
                                    </div>
                                    <div class="form-text">Digite apenas números ou com hífen</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="numero" class="form-label">Número</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="numero" 
                                           name="numero" 
                                           placeholder="Ex: 123">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8 mb-3">
                                    <label for="rua" class="form-label">Rua/Logradouro</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="rua" 
                                           name="rua" 
                                           readonly>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="complemento" class="form-label">Complemento</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="complemento" 
                                           name="complemento" 
                                           placeholder="Ex: Apto 101">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="bairro" class="form-label">Bairro</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="bairro" 
                                           name="bairro" 
                                           readonly>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="cidade" class="form-label">Cidade</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="cidade" 
                                           name="cidade" 
                                           readonly>
                                </div>
                                <div class="col-md-2 mb-3">
                                    <label for="estado" class="form-label">Estado</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="estado" 
                                           name="estado" 
                                           readonly>
                                </div>
                            </div>

                            <!-- Área de mensagens -->
                            <div id="mensagem" class="alert" style="display: none;"></div>

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn btn-secondary me-md-2" id="btnLimpar">
                                    <i class="fas fa-eraser"></i> Limpar
                                </button>
                                <button type="submit" class="btn btn-success">
                                    <i class="fas fa-save"></i> Salvar Endereço
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Card de informações -->
                <div class="card mt-4">
                    <div class="card-header bg-info text-white">
                        <h6 class="card-title mb-0">
                            <i class="fas fa-info-circle"></i> Sobre esta Atividade
                        </h6>
                    </div>
                    <div class="card-body">
                        <p class="mb-2"><strong>Objetivo:</strong> Criar formulário para consumo da API ViaCEP</p>
                        <p class="mb-2"><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript, Bootstrap</p>
                        <p class="mb-0"><strong>Funcionalidades:</strong> Consulta automática de endereço por CEP</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <div class="container">
            <p>&copy; 2024 Atividade Prática 2 - Consulta CEP com ViaCEP</p>
        </div>
    </footer>

    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous"></script>
    
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    
    <!-- JavaScript personalizado -->
    <script src="resources/js/endereco.js"></script>
</body>
</html>

