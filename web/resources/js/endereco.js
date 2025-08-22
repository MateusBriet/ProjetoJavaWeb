/**
 * JavaScript para consulta de endereço via API ViaCEP
 * Atividade Prática 2 - HTML5, JavaScript e Bootstrap
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const cepInput = document.getElementById('cep');
    const btnConsultar = document.getElementById('btnConsultar');
    const btnLimpar = document.getElementById('btnLimpar');
    const formEndereco = document.getElementById('formEndereco');
    const mensagemDiv = document.getElementById('mensagem');
    
    // Campos de endereço
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const numeroInput = document.getElementById('numero');
    const complementoInput = document.getElementById('complemento');

    // Máscara para CEP
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    // Consultar CEP ao pressionar Enter
    cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            consultarCEP();
        }
    });

    // Consultar CEP ao clicar no botão
    btnConsultar.addEventListener('click', consultarCEP);

    // Limpar formulário
    btnLimpar.addEventListener('click', function() {
        limparFormulario();
        mostrarMensagem('Formulário limpo com sucesso!', 'info');
    });

    // Submit do formulário
    formEndereco.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validarFormulario()) {
            mostrarMensagem('Endereço salvo com sucesso!', 'success');
            console.log('Dados do endereço:', obterDadosFormulario());
        }
    });

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
        btnConsultar.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Consultando...';
        btnConsultar.disabled = true;
        
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
                btnConsultar.innerHTML = 'Consultar';
                btnConsultar.disabled = false;
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
        
        // Adicionar classe de animação
        [ruaInput, bairroInput, cidadeInput, estadoInput].forEach(input => {
            input.classList.add('fade-in');
            setTimeout(() => input.classList.remove('fade-in'), 500);
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
    }

    /**
     * Limpa todo o formulário
     */
    function limparFormulario() {
        formEndereco.reset();
        esconderMensagem();
        cepInput.focus();
    }

    /**
     * Valida o formulário antes do envio
     */
    function validarFormulario() {
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (!validarCEP(cep)) {
            mostrarMensagem('CEP é obrigatório e deve ter 8 dígitos.', 'warning');
            cepInput.focus();
            return false;
        }

        if (!ruaInput.value.trim()) {
            mostrarMensagem('Consulte o CEP primeiro para preencher o endereço.', 'warning');
            cepInput.focus();
            return false;
        }

        return true;
    }

    /**
     * Obtém os dados do formulário
     */
    function obterDadosFormulario() {
        return {
            cep: cepInput.value,
            rua: ruaInput.value,
            numero: numeroInput.value,
            complemento: complementoInput.value,
            bairro: bairroInput.value,
            cidade: cidadeInput.value,
            estado: estadoInput.value
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
            setTimeout(esconderMensagem, 3000);
        }
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

    // Focar no campo CEP ao carregar a página
    cepInput.focus();
});

