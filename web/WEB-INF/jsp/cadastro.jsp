<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Cadastro - Atividades Práticas 3 e 4</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
          crossorigin="anonymous">
    
    <!-- jQuery -->
    <script type="text/javascript" 
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    
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
                        <a class="nav-link" href="endereco.htm">Consulta CEP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="cadastro.htm">Cadastro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Conteúdo principal -->
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header bg-warning text-dark">
                        <h4 class="card-title mb-0">
                            <i class="fas fa-user-plus"></i> Formulário de Cadastro
                        </h4>
                        <small>Atividades Práticas 3 e 4 - Spring MVC, Bootstrap e jQuery</small>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-4">
                            Preencha todos os campos obrigatórios (*) para realizar o cadastro. 
                            O CEP será consultado automaticamente na API ViaCEP.
                        </p>

                        <form id="formCadastro" method="post" action="cadastro.htm">
                            <!-- Dados Pessoais -->
                            <div class="row mb-4">
                                <div class="col-12">
                                    <h5 class="text-primary border-bottom pb-2">
                                        <i class="fas fa-user"></i> Dados Pessoais
                                    </h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="nome" class="form-label">Nome *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="nome" 
                                           name="nome" 
                                           placeholder="Digite seu nome"
                                           required>
                                    <div class="invalid-feedback">
                                        Por favor, digite seu nome.
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="sobrenome" class="form-label">Sobrenome *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="sobrenome" 
                                           name="sobrenome" 
                                           placeholder="Digite seu sobrenome"
                                           required>
                                    <div class="invalid-feedback">
                                        Por favor, digite seu sobrenome.
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">E-mail *</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <input type="email" 
                                               class="form-control" 
                                               id="email" 
                                               name="email" 
                                               placeholder="exemplo@email.com"
                                               required>
                                        <div class="invalid-feedback">
                                            Por favor, digite um e-mail válido.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="senha" class="form-label">Senha *</label>
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                        <input type="password" 
                                               class="form-control" 
                                               id="senha" 
                                               name="senha" 
                                               placeholder="Digite sua senha"
                                               minlength="6"
                                               required>
                                        <div class="invalid-feedback">
                                            A senha deve ter pelo menos 6 caracteres.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Endereço -->
                            <div class="row mb-4 mt-4">
                                <div class="col-12">
                                    <h5 class="text-primary border-bottom pb-2">
                                        <i class="fas fa-map-marker-alt"></i> Endereço
                                    </h5>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-3">
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
                                                id="btnConsultarCep">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                    <div class="invalid-feedback">
                                        Por favor, digite um CEP válido.
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="rua" class="form-label">Rua/Logradouro *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="rua" 
                                           name="rua" 
                                           placeholder="Nome da rua"
                                           required>
                                    <div class="invalid-feedback">
                                        Por favor, digite o nome da rua.
                                    </div>
                                </div>
                                <div class="col-md-2 mb-3">
                                    <label for="numero" class="form-label">Número *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="numero" 
                                           name="numero" 
                                           placeholder="123"
                                           required>
                                    <div class="invalid-feedback">
                                        Digite o número.
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="complemento" class="form-label">Complemento</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="complemento" 
                                           name="complemento" 
                                           placeholder="Apto, Bloco, etc.">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="bairro" class="form-label">Bairro *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="bairro" 
                                           name="bairro" 
                                           placeholder="Nome do bairro"
                                           required>
                                    <div class="invalid-feedback">
                                        Por favor, digite o bairro.
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="cidade" class="form-label">Cidade *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="cidade" 
                                           name="cidade" 
                                           placeholder="Nome da cidade"
                                           required>
                                    <div class="invalid-feedback">
                                        Por favor, digite a cidade.
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3">
                                    <label for="estado" class="form-label">UF *</label>
                                    <input type="text" 
                                           class="form-control" 
                                           id="estado" 
                                           name="estado" 
                                           placeholder="SP"
                                           maxlength="2"
                                           required>
                                    <div class="invalid-feedback">
                                        Digite a UF.
                                    </div>
                                </div>
                            </div>

                            <!-- Área de mensagens -->
                            <div id="mensagem" class="alert" style="display: none;"></div>

                            <!-- Botões -->
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button type="button" class="btn btn-secondary me-md-2" id="btnLimpar">
                                            <i class="fas fa-eraser"></i> Limpar Formulário
                                        </button>
                                        <button type="submit" class="btn btn-success">
                                            <i class="fas fa-save"></i> Cadastrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Card de informações -->
                <div class="card mt-4">
                    <div class="card-header bg-info text-white">
                        <h6 class="card-title mb-0">
                            <i class="fas fa-info-circle"></i> Sobre estas Atividades
                        </h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="mb-2"><strong>Atividade 3:</strong></p>
                                <ul class="mb-3">
                                    <li>Spring Web MVC</li>
                                    <li>Bootstrap 5</li>
                                    <li>12 campos de cadastro</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <p class="mb-2"><strong>Atividade 4:</strong></p>
                                <ul class="mb-3">
                                    <li>Validação com jQuery</li>
                                    <li>Validação de e-mail</li>
                                    <li>Integração ViaCEP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <div class="container">
            <p>&copy; 2024 Atividades Práticas 3 e 4 - Cadastro com Spring MVC e jQuery</p>
        </div>
    </footer>

    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous"></script>
    
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    
    <!-- JavaScript personalizado -->
    <script src="resources/js/cadastro.js"></script>
    <script src="resources/js/validation.js"></script>
</body>
</html>

