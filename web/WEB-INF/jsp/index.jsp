<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Java Web - Atividades Práticas</title>
    
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
                        <a class="nav-link active" href="index.htm">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="endereco.htm">Consulta CEP</a>
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
        <div class="row">
            <div class="col-12">
                <div class="jumbotron bg-light p-5 rounded">
                    <h1 class="display-4">Bem-vindo ao Projeto Java Web!</h1>
                    <p class="lead">
                        Este projeto integra as quatro atividades práticas do curso de Framework para Desenvolvimento de Software.
                    </p>
                    <hr class="my-4">
                    <p>
                        Explore as funcionalidades desenvolvidas utilizando Spring MVC, Bootstrap, jQuery e integração com a API ViaCEP.
                    </p>
                </div>
            </div>
        </div>

        <!-- Cards das atividades -->
        <div class="row mt-5">
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-info text-white">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-server"></i> Atividade Prática 1
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Configuração do servidor Tomcat e criação de aplicação web básica com Spring MVC.
                        </p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-success"></i> Servidor Tomcat configurado</li>
                            <li><i class="fas fa-check text-success"></i> Spring Web MVC implementado</li>
                            <li><i class="fas fa-check text-success"></i> Estrutura de projeto criada</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-success text-white">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-map-marker-alt"></i> Atividade Prática 2
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Formulário de consulta de endereço com integração à API ViaCEP.
                        </p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-success"></i> Formulário HTML5</li>
                            <li><i class="fas fa-check text-success"></i> Integração ViaCEP</li>
                            <li><i class="fas fa-check text-success"></i> Estilização Bootstrap</li>
                        </ul>
                        <a href="endereco.htm" class="btn btn-success">Acessar</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-warning text-dark">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-user-plus"></i> Atividade Prática 3
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Formulário de cadastro completo utilizando Spring MVC e Bootstrap 5.
                        </p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-success"></i> 12 campos de cadastro</li>
                            <li><i class="fas fa-check text-success"></i> Spring MVC backend</li>
                            <li><i class="fas fa-check text-success"></i> Bootstrap 5 styling</li>
                        </ul>
                        <a href="cadastro.htm" class="btn btn-warning">Acessar</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-header bg-danger text-white">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-shield-alt"></i> Atividade Prática 4
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Validação avançada de formulários com jQuery e expressões regulares.
                        </p>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-check text-success"></i> Validação jQuery</li>
                            <li><i class="fas fa-check text-success"></i> Validação de email</li>
                            <li><i class="fas fa-check text-success"></i> Integração ViaCEP</li>
                        </ul>
                        <span class="text-muted">Integrado no cadastro</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Informações técnicas -->
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-cogs"></i> Tecnologias Utilizadas
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <h6>Backend</h6>
                                <ul class="list-unstyled">
                                    <li>Java</li>
                                    <li>Spring Web MVC</li>
                                    <li>Apache Tomcat</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6>Frontend</h6>
                                <ul class="list-unstyled">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6>Frameworks</h6>
                                <ul class="list-unstyled">
                                    <li>Bootstrap 5</li>
                                    <li>Font Awesome</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6>APIs</h6>
                                <ul class="list-unstyled">
                                    <li>ViaCEP</li>
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
            <p>&copy; 2024 Projeto Java Web - Atividades Práticas. Desenvolvido com Spring MVC e Bootstrap.</p>
        </div>
    </footer>

    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous"></script>
    
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
</html>

