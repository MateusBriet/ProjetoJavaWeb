/**
 * JavaScript para formulário de cadastro com consulta ViaCEP
 * Atividade Prática 3 - Spring MVC e Bootstrap
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const formCadastro = document.getElementById('formCadastro');
    const cepInput = document.getElementById('cep');
    const btnConsultarCep = document.getElementById('btnConsultarCep');
    const btnLimpar = document.getElementById('btnLimpar');
    const mensagemDiv = document.getElementById('mensagem');
    
    // Campos de endereço
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    
    // Campos pessoais
    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('sobrenome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const numeroInput = document.getElementById('numero');
    const complementoInput = document.getElementById('complemento');

    // Máscara para CEP
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
        
        // Auto-consultar se CEP estiver completo
        if (value.length === 9) {
            consultarCEP();
        }
    });

    // Consultar CEP ao pressionar Enter
    cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            consultarCEP();
        }
    });

    // Consultar CEP ao clicar no botão
    btnConsultarCep.addEventListener('click', consultarCEP);

    // Limpar formulário
    btnLimpar.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja limpar todos os campos?')) {
            limparFormulario();
            mostrarMensagem('Formulário limpo com sucesso!', 'info');
        }
    });

    // Submit do formulário
    formCadastro.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validarFormularioCompleto()) {
            // Simular envio dos dados
            const dadosCadastro = obterDadosFormulario();
            console.log('Dados do cadastro:', dadosCadastro);
            
            mostrarMensagem('Cadastro realizado com sucesso!', 'success');
            
            // Opcional: limpar formulário após sucesso
            setTimeout(() => {
                if (confirm('Cadastro realizado! Deseja limpar o formulário?')) {
                    limparFormulario();
                }
            }, 2000);
        }
    });

    // Validação em tempo real dos campos
    nomeInput.addEventListener('blur', () => validarCampo(nomeInput, 'Nome é obrigatório'));
    sobrenomeInput.addEventListener('blur', () => validarCampo(sobrenomeInput, 'Sobrenome é obrigatório'));
    emailInput.addEventListener('blur', validarEmail);
    senhaInput.addEventListener('blur', validarSenha);
    numeroInput.addEventListener('blur', () => validarCampo(numeroInput, 'Número é obrigatório'));

    /**
     * Consulta o CEP na API ViaCEP
     */
    function consultarCEP() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (!validarCEP(cep)) {
            mostrarMensagem('Por favor, digite um CEP válido (8 dígitos).', 'warning');
            return;
        }

        // Mostrar loading
        btnConsultarCep.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span>';
        btnConsultarCep.disabled = true;
        
        // Limpar campos de endereço
        limparCamposEndereco();

        // Fazer requisição para a API ViaCEP
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na consulta do CEP');
                }
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    throw new Error('CEP não encontrado');
                }
                
                // Preencher campos com os dados retornados
                preencherCamposEndereco(data);
                mostrarMensagem('CEP consultado com sucesso!', 'success');
                
                // Focar no campo número
                numeroInput.focus();
            })
            .catch(error => {
                console.error('Erro ao consultar CEP:', error);
                mostrarMensagem('Erro ao consultar CEP. Verifique se o CEP está correto.', 'danger');
            })
            .finally(() => {
                // Restaurar botão
                btnConsultarCep.innerHTML = '<i class="fas fa-search"></i>';
                btnConsultarCep.disabled = false;
            });
    }

    /**
     * Valida o formato do CEP
     */
    function validarCEP(cep) {
        return cep && cep.length === 8 && /^\d{8}$/.test(cep);
    }

    /**
     * Preenche os campos de endereço com os dados da API
     */
    function preencherCamposEndereco(dados) {
        ruaInput.value = dados.logradouro || '';
        bairroInput.value = dados.bairro || '';
        cidadeInput.value = dados.localidade || '';
        estadoInput.value = dados.uf || '';
        
        // Marcar campos como válidos
        [ruaInput, bairroInput, cidadeInput, estadoInput].forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        });
    }

    /**
     * Limpa apenas os campos de endereço
     */
    function limparCamposEndereco() {
        ruaInput.value = '';
        bairroInput.value = '';
        cidadeInput.value = '';
        estadoInput.value = '';
        
        // Remover classes de validação
        [ruaInput, bairroInput, cidadeInput, estadoInput].forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });
    }

    /**
     * Limpa todo o formulário
     */
    function limparFormulario() {
        formCadastro.reset();
        
        // Remover todas as classes de validação
        const inputs = formCadastro.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
        });
        
        esconderMensagem();
        nomeInput.focus();
    }

    /**
     * Valida um campo individual
     */
    function validarCampo(input, mensagemErro) {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            return false;
        } else {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            return true;
        }
    }

    /**
     * Valida o campo de email
     */
    function validarEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            return false;
        } else if (!emailRegex.test(email)) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            mostrarMensagem('Por favor, digite um e-mail válido.', 'warning');
            return false;
        } else {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
            return true;
        }
    }

    /**
     * Valida o campo de senha
     */
    function validarSenha() {
        const senha = senhaInput.value;
        
        if (!senha) {
            senhaInput.classList.add('is-invalid');
            senhaInput.classList.remove('is-valid');
            return false;
        } else if (senha.length < 6) {
            senhaInput.classList.add('is-invalid');
            senhaInput.classList.remove('is-valid');
            mostrarMensagem('A senha deve ter pelo menos 6 caracteres.', 'warning');
            return false;
        } else {
            senhaInput.classList.add('is-valid');
            senhaInput.classList.remove('is-invalid');
            return true;
        }
    }

    /**
     * Valida o formulário completo antes do envio
     */
    function validarFormularioCompleto() {
        let valido = true;
        
        // Validar campos obrigatórios
        const camposObrigatorios = [
            { input: nomeInput, mensagem: 'Nome é obrigatório' },
            { input: sobrenomeInput, mensagem: 'Sobrenome é obrigatório' },
            { input: emailInput, mensagem: 'E-mail é obrigatório' },
            { input: senhaInput, mensagem: 'Senha é obrigatória' },
            { input: cepInput, mensagem: 'CEP é obrigatório' },
            { input: ruaInput, mensagem: 'Rua é obrigatória' },
            { input: numeroInput, mensagem: 'Número é obrigatório' },
            { input: bairroInput, mensagem: 'Bairro é obrigatório' },
            { input: cidadeInput, mensagem: 'Cidade é obrigatória' },
            { input: estadoInput, mensagem: 'Estado é obrigatório' }
        ];
        
        camposObrigatorios.forEach(campo => {
            if (!validarCampo(campo.input, campo.mensagem)) {
                valido = false;
            }
        });
        
        // Validações específicas
        if (!validarEmail()) valido = false;
        if (!validarSenha()) valido = false;
        
        const cep = cepInput.value.replace(/\D/g, '');
        if (!validarCEP(cep)) {
            cepInput.classList.add('is-invalid');
            mostrarMensagem('CEP deve ter 8 dígitos.', 'warning');
            valido = false;
        }
        
        if (!valido) {
            mostrarMensagem('Por favor, corrija os campos destacados em vermelho.', 'danger');
        }
        
        return valido;
    }

    /**
     * Obtém os dados do formulário
     */
    function obterDadosFormulario() {
        return {
            nome: nomeInput.value.trim(),
            sobrenome: sobrenomeInput.value.trim(),
            email: emailInput.value.trim(),
            senha: senhaInput.value,
            cep: cepInput.value,
            rua: ruaInput.value.trim(),
            numero: numeroInput.value.trim(),
            complemento: complementoInput.value.trim(),
            bairro: bairroInput.value.trim(),
            cidade: cidadeInput.value.trim(),
            estado: estadoInput.value.trim()
        };
    }

    /**
     * Mostra mensagem para o usuário
     */
    function mostrarMensagem(texto, tipo) {
        mensagemDiv.className = `alert alert-${tipo}`;
        mensagemDiv.innerHTML = `
            <i class="fas fa-${obterIconeMensagem(tipo)}"></i>
            ${texto}
        `;
        mensagemDiv.style.display = 'block';
        
        // Auto-hide para mensagens de sucesso e info
        if (tipo === 'success' || tipo === 'info') {
            setTimeout(esconderMensagem, 4000);
        }
        
        // Scroll para a mensagem
        mensagemDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * Esconde a mensagem
     */
    function esconderMensagem() {
        mensagemDiv.style.display = 'none';
    }

    /**
     * Retorna o ícone apropriado para o tipo de mensagem
     */
    function obterIconeMensagem(tipo) {
        const icones = {
            'success': 'check-circle',
            'danger': 'exclamation-triangle',
            'warning': 'exclamation-circle',
            'info': 'info-circle'
        };
        return icones[tipo] || 'info-circle';
    }

    // Focar no primeiro campo ao carregar a página
    nomeInput.focus();
});

