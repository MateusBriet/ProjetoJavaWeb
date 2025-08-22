# Projeto Java Web - Atividades Práticas

Este projeto integra as quatro atividades práticas do curso de Framework para Desenvolvimento de Software, desenvolvido para ser executado no NetBeans com servidor Tomcat.

## 📋 Descrição das Atividades

### Atividade Prática 1
- **Objetivo**: Configuração do servidor Tomcat e criação de aplicação web básica
- **Tecnologias**: NetBeans, Apache Tomcat 8.x, Spring Web MVC
- **Implementação**: Estrutura base do projeto com Spring MVC configurado

### Atividade Prática 2
- **Objetivo**: Formulário de consulta de endereço com API ViaCEP
- **Tecnologias**: HTML5, CSS3, JavaScript, Bootstrap
- **Funcionalidades**: 
  - Formulário com campos de endereço
  - Consulta automática via API ViaCEP
  - Estilização com Bootstrap 5

### Atividade Prática 3
- **Objetivo**: Formulário de cadastro completo com Spring MVC
- **Tecnologias**: Spring Web MVC, Bootstrap 5, JSP
- **Funcionalidades**:
  - Formulário com 12 campos de cadastro
  - Integração com Spring MVC
  - Estilização completa com Bootstrap 5

### Atividade Prática 4
- **Objetivo**: Validação avançada com jQuery
- **Tecnologias**: jQuery, JavaScript, Expressões Regulares
- **Funcionalidades**:
  - Validação em tempo real de todos os campos
  - Validação específica de e-mail com regex
  - Indicador de força da senha
  - Integração com API ViaCEP

## 🚀 Como Executar no NetBeans

### Pré-requisitos
- NetBeans IDE (versão 8.0 ou superior)
- Java JDK 8 ou superior
- Apache Tomcat 8.x

### Passos para Importação

1. **Extrair o projeto**
   ```
   Extrair o arquivo ProjetoJavaWeb.zip em uma pasta local
   ```

2. **Abrir no NetBeans**
   - File → Open Project
   - Navegar até a pasta extraída
   - Selecionar "ProjetoJavaWeb"
   - Clicar em "Open Project"

3. **Configurar o Tomcat**
   - Tools → Servers
   - Add Server → Apache Tomcat or TomEE
   - Especificar o caminho de instalação do Tomcat
   - Configurar usuário e senha (opcional)

4. **Executar o projeto**
   - Clicar com botão direito no projeto
   - Selecionar "Run"
   - O NetBeans irá compilar e fazer deploy no Tomcat
   - Acessar via navegador: `http://localhost:8080/ProjetoJavaWeb/`

## 📁 Estrutura do Projeto

```
ProjetoJavaWeb/
├── src/
│   └── java/
│       └── com/
│           └── projeto/
│               └── controller/
│                   └── HomeController.java
├── web/
│   ├── WEB-INF/
│   │   ├── web.xml
│   │   ├── dispatcher-servlet.xml
│   │   └── jsp/
│   │       ├── index.jsp
│   │       ├── endereco.jsp
│   │       └── cadastro.jsp
│   ├── resources/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       ├── endereco.js
│   │       ├── cadastro.js
│   │       └── validation.js
│   └── redirect.jsp
└── README.md
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Java**: Linguagem principal
- **Spring Web MVC**: Framework para desenvolvimento web
- **Apache Tomcat**: Servidor de aplicação
- **JSP**: Java Server Pages para templates

### Frontend
- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização personalizada
- **Bootstrap 5**: Framework CSS responsivo
- **JavaScript**: Funcionalidades interativas
- **jQuery**: Biblioteca para validações avançadas

### APIs Externas
- **ViaCEP**: API para consulta de endereços por CEP

## 🎯 Funcionalidades Implementadas

### Página Principal (index.htm)
- Dashboard com informações sobre todas as atividades
- Navegação entre as diferentes funcionalidades
- Cards informativos sobre cada atividade prática

### Consulta de Endereço (endereco.htm)
- Formulário para consulta de CEP
- Preenchimento automático dos campos de endereço
- Validação de formato do CEP
- Mensagens de feedback para o usuário

### Cadastro de Usuário (cadastro.htm)
- Formulário completo com 12 campos
- Validação em tempo real com jQuery
- Validação de e-mail com expressões regulares
- Indicador de força da senha
- Consulta automática de endereço por CEP
- Feedback visual para campos válidos/inválidos

## 🔧 Configurações do Spring MVC

### web.xml
- Configuração do DispatcherServlet
- Mapeamento de URLs (*.htm)
- Página de redirecionamento

### dispatcher-servlet.xml
- Configuração do ViewResolver
- Escaneamento de componentes
- Configuração de recursos estáticos

## 📱 Responsividade

O projeto foi desenvolvido com Bootstrap 5, garantindo:
- Layout responsivo para desktop e mobile
- Componentes adaptativos
- Navegação otimizada para dispositivos móveis

## 🧪 Testes

Para testar as funcionalidades:

1. **Atividade 1**: Verificar se a aplicação inicia corretamente
2. **Atividade 2**: Testar consulta de CEP (ex: 01310-100)
3. **Atividade 3**: Preencher formulário de cadastro completo
4. **Atividade 4**: Verificar validações em tempo real

## 📝 Observações

- O projeto está configurado para funcionar com Tomcat 8.x
- As validações JavaScript funcionam offline
- A API ViaCEP requer conexão com internet
- Todos os estilos são responsivos e compatíveis com navegadores modernos

## 🤝 Suporte

Em caso de dúvidas sobre a execução:
1. Verificar se o Tomcat está configurado corretamente
2. Confirmar se o Java JDK está instalado
3. Verificar se as dependências do Spring estão no classpath
4. Consultar os logs do Tomcat para erros específicos

---

**Desenvolvido como projeto acadêmico integrando Spring MVC, Bootstrap, jQuery e API ViaCEP**

