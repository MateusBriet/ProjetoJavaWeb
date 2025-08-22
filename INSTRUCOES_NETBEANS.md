# Instruções para Execução no NetBeans

## Pré-requisitos
- NetBeans IDE 8.0 ou superior
- Java JDK 8 ou superior
- Apache Tomcat 8.x

## Passos para Importação e Execução

### 1. Configuração do Tomcat no NetBeans
1. Abra o NetBeans
2. Vá em **Tools → Servers**
3. Clique em **Add Server**
4. Selecione **Apache Tomcat or TomEE**
5. Especifique o caminho de instalação do Tomcat (ex: C:\apache-tomcat-8.5.82)
6. Configure usuário e senha se necessário
7. Clique em **Finish**

### 2. Importação do Projeto
1. Extraia o arquivo **ProjetoJavaWeb.zip**
2. No NetBeans, vá em **File → Open Project**
3. Navegue até a pasta extraída
4. Selecione **ProjetoJavaWeb**
5. Clique em **Open Project**

### 3. Configuração do Servidor no Projeto
1. Clique com botão direito no projeto
2. Selecione **Properties**
3. Vá em **Run**
4. Em **Server**, selecione o Tomcat configurado
5. Clique em **OK**

### 4. Execução do Projeto
1. Clique com botão direito no projeto
2. Selecione **Run** ou pressione **F6**
3. O NetBeans irá:
   - Compilar o projeto
   - Fazer deploy no Tomcat
   - Abrir o navegador automaticamente

### 5. Acessando as Funcionalidades

#### Página Principal
- URL: `http://localhost:8080/ProjetoJavaWeb/`
- Navegação para todas as atividades

#### Atividade Prática 2 - Consulta CEP
- URL: `http://localhost:8080/ProjetoJavaWeb/endereco.htm`
- Teste com CEP: 01310-100

#### Atividade Prática 3 e 4 - Cadastro
- URL: `http://localhost:8080/ProjetoJavaWeb/cadastro.htm`
- Preencha todos os campos obrigatórios

## Estrutura do Projeto no NetBeans

```
ProjetoJavaWeb/
├── Source Packages/
│   └── com.projeto.controller/
│       └── HomeController.java
├── Web Pages/
│   ├── WEB-INF/
│   │   ├── web.xml
│   │   ├── dispatcher-servlet.xml
│   │   └── jsp/
│   │       ├── index.jsp
│   │       ├── endereco.jsp
│   │       └── cadastro.jsp
│   ├── resources/
│   │   ├── css/style.css
│   │   └── js/
│   │       ├── endereco.js
│   │       ├── cadastro.js
│   │       └── validation.js
│   └── redirect.jsp
└── Libraries/
    └── Spring Framework (será adicionado automaticamente)
```

## Dependências Necessárias

O NetBeans irá solicitar as seguintes dependências do Spring:
- spring-webmvc
- spring-context
- spring-core
- spring-beans
- spring-web

**Importante**: Aceite a instalação automática das dependências quando solicitado.

## Solução de Problemas

### Erro de Compilação
- Verifique se o JDK está configurado corretamente
- Confirme se as dependências do Spring foram adicionadas

### Erro 404 ao Acessar
- Verifique se o Tomcat está rodando
- Confirme se o deploy foi realizado com sucesso
- Verifique os logs do Tomcat

### Problemas com API ViaCEP
- Verifique a conexão com internet
- Teste com CEPs válidos (ex: 01310-100)

## URLs de Teste

- **Página Principal**: http://localhost:8080/ProjetoJavaWeb/
- **Consulta CEP**: http://localhost:8080/ProjetoJavaWeb/endereco.htm
- **Cadastro**: http://localhost:8080/ProjetoJavaWeb/cadastro.htm

## Funcionalidades Implementadas

### ✅ Atividade Prática 1
- Configuração Spring MVC
- Servidor Tomcat integrado
- Estrutura de projeto web

### ✅ Atividade Prática 2
- Formulário de consulta CEP
- Integração API ViaCEP
- Estilização Bootstrap

### ✅ Atividade Prática 3
- Formulário de cadastro (12 campos)
- Spring MVC backend
- Bootstrap 5 styling

### ✅ Atividade Prática 4
- Validação jQuery
- Validação de email com regex
- Feedback visual em tempo real

---

**Projeto desenvolvido seguindo rigorosamente as especificações das 4 atividades práticas**

