/**
 * JavaScript para validação avançada com jQuery
 * Atividade Prática 4 - Validação com jQuery e expressões regulares
 */

$(document).ready(function() {
    
    // Configurações de validação
    const validationConfig = {
        email: {
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Por favor, digite um e-mail válido (exemplo: usuario@dominio.com)'
        },
        nome: {
            regex: /^[a-zA-ZÀ-ÿ\s]{2,50}$/,
            message: 'Nome deve conter apenas letras e ter entre 2 e 50 caracteres'
        },
        senha: {
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
            message: 'Senha deve ter pelo menos 6 caracteres, incluindo maiúscula, minúscula e número'
        },
        cep: {
            regex: /^\d{5}-?\d{3}$/,
            message: 'CEP deve ter o formato 00000-000'
        }
    };

    // Inicializar validações
    initializeValidation();

    /**
     * Inicializa todas as validações
     */
    function initializeValidation() {
        // Validação em tempo real para todos os campos
        $('#formCadastro input[required]').on('blur keyup', function() {
            validateField($(this));
        });

        // Validação específica para email
        $('#email').on('blur keyup', function() {
            validateEmail($(this));
        });

        // Validação específica para senha
        $('#senha').on('blur keyup', function() {
            validatePassword($(this));
        });

        // Validação específica para nome e sobrenome
        $('#nome, #sobrenome').on('blur keyup', function() {
            validateName($(this));
        });

        // Validação específica para CEP
        $('#cep').on('blur', function() {
            validateCEP($(this));
        });

        // Interceptar submit do formulário
        $('#formCadastro').on('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                submitForm();
            }
        });

        // Validação de confirmação de senha (se existir)
        if ($('#confirmarSenha').length) {
            $('#confirmarSenha').on('blur keyup', function() {
                validatePasswordConfirmation();
            });
        }
    }

    /**
     * Valida um campo individual
     */
    function validateField($field) {
        const value = $field.val().trim();
        const fieldName = $field.attr('name');
        const isRequired = $field.attr('required') !== undefined;

        // Limpar validações anteriores
        clearFieldValidation($field);

        // Verificar se é obrigatório e está vazio
        if (isRequired && !value) {
            setFieldInvalid($field, 'Este campo é obrigatório');
            return false;
        }

        // Se não é obrigatório e está vazio, considerar válido
        if (!isRequired && !value) {
            setFieldValid($field);
            return true;
        }

        // Validações específicas por tipo de campo
        switch (fieldName) {
            case 'email':
                return validateEmail($field);
            case 'senha':
                return validatePassword($field);
            case 'nome':
            case 'sobrenome':
                return validateName($field);
            case 'cep':
                return validateCEP($field);
            default:
                setFieldValid($field);
                return true;
        }
    }

    /**
     * Valida campo de email com expressão regular
     */
    function validateEmail($field) {
        const email = $field.val().trim();
        
        if (!email) {
            setFieldInvalid($field, 'E-mail é obrigatório');
            return false;
        }

        if (!validationConfig.email.regex.test(email)) {
            setFieldInvalid($field, validationConfig.email.message);
            return false;
        }

        // Validações adicionais
        if (email.length > 100) {
            setFieldInvalid($field, 'E-mail muito longo (máximo 100 caracteres)');
            return false;
        }

        setFieldValid($field, 'E-mail válido');
        return true;
    }

    /**
     * Valida campo de senha
     */
    function validatePassword($field) {
        const senha = $field.val();
        
        if (!senha) {
            setFieldInvalid($field, 'Senha é obrigatória');
            return false;
        }

        if (senha.length < 6) {
            setFieldInvalid($field, 'Senha deve ter pelo menos 6 caracteres');
            return false;
        }

        if (senha.length > 50) {
            setFieldInvalid($field, 'Senha muito longa (máximo 50 caracteres)');
            return false;
        }

        // Verificar força da senha
        let score = 0;
        if (/[a-z]/.test(senha)) score++;
        if (/[A-Z]/.test(senha)) score++;
        if (/\d/.test(senha)) score++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) score++;

        if (score < 2) {
            setFieldInvalid($field, 'Senha fraca. Use letras maiúsculas, minúsculas e números');
            return false;
        }

        let message = 'Senha ';
        if (score === 2) message += 'fraca';
        else if (score === 3) message += 'média';
        else message += 'forte';

        setFieldValid($field, message);
        return true;
    }

    /**
     * Valida campos de nome
     */
    function validateName($field) {
        const nome = $field.val().trim();
        const fieldLabel = $field.prev('label').text().replace('*', '').trim();
        
        if (!nome) {
            setFieldInvalid($field, `${fieldLabel} é obrigatório`);
            return false;
        }

        if (!validationConfig.nome.regex.test(nome)) {
            setFieldInvalid($field, validationConfig.nome.message);
            return false;
        }

        setFieldValid($field);
        return true;
    }

    /**
     * Valida campo de CEP
     */
    function validateCEP($field) {
        const cep = $field.val().trim();
        
        if (!cep) {
            setFieldInvalid($field, 'CEP é obrigatório');
            return false;
        }

        if (!validationConfig.cep.regex.test(cep)) {
            setFieldInvalid($field, validationConfig.cep.message);
            return false;
        }

        setFieldValid($field);
        return true;
    }

    /**
     * Valida confirmação de senha
     */
    function validatePasswordConfirmation() {
        const senha = $('#senha').val();
        const confirmacao = $('#confirmarSenha').val();
        const $field = $('#confirmarSenha');

        if (!confirmacao) {
            setFieldInvalid($field, 'Confirmação de senha é obrigatória');
            return false;
        }

        if (senha !== confirmacao) {
            setFieldInvalid($field, 'As senhas não coincidem');
            return false;
        }

        setFieldValid($field, 'Senhas coincidem');
        return true;
    }

    /**
     * Valida todo o formulário
     */
    function validateForm() {
        let isValid = true;
        const $requiredFields = $('#formCadastro input[required]');

        // Validar todos os campos obrigatórios
        $requiredFields.each(function() {
            if (!validateField($(this))) {
                isValid = false;
            }
        });

        // Validar confirmação de senha se existir
        if ($('#confirmarSenha').length && !validatePasswordConfirmation()) {
            isValid = false;
        }

        // Mostrar mensagem de erro se houver campos inválidos
        if (!isValid) {
            showMessage('Por favor, corrija os erros destacados em vermelho.', 'danger');
            
            // Focar no primeiro campo inválido
            const $firstInvalid = $('.is-invalid').first();
            if ($firstInvalid.length) {
                $firstInvalid.focus();
                $firstInvalid[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        return isValid;
    }

    /**
     * Submete o formulário após validação
     */
    function submitForm() {
        const formData = getFormData();
        
        // Mostrar loading
        const $submitBtn = $('#formCadastro button[type="submit"]');
        const originalText = $submitBtn.html();
        $submitBtn.html('<span class="spinner-border spinner-border-sm" role="status"></span> Processando...');
        $submitBtn.prop('disabled', true);

        // Simular envio (substituir por requisição real)
        setTimeout(function() {
            console.log('Dados validados e enviados:', formData);
            showMessage('Cadastro realizado com sucesso! Todos os campos foram validados.', 'success');
            
            // Restaurar botão
            $submitBtn.html(originalText);
            $submitBtn.prop('disabled', false);
            
            // Opcional: limpar formulário
            setTimeout(function() {
                if (confirm('Cadastro realizado com sucesso! Deseja limpar o formulário?')) {
                    resetForm();
                }
            }, 2000);
            
        }, 1500);
    }

    /**
     * Obtém dados do formulário
     */
    function getFormData() {
        const data = {};
        $('#formCadastro input').each(function() {
            const $input = $(this);
            const name = $input.attr('name');
            if (name) {
                data[name] = $input.val().trim();
            }
        });
        return data;
    }

    /**
     * Reseta o formulário
     */
    function resetForm() {
        $('#formCadastro')[0].reset();
        $('#formCadastro .form-control').removeClass('is-valid is-invalid');
        hideMessage();
        $('#nome').focus();
    }

    /**
     * Marca campo como inválido
     */
    function setFieldInvalid($field, message) {
        $field.removeClass('is-valid').addClass('is-invalid');
        
        // Atualizar mensagem de erro
        let $feedback = $field.siblings('.invalid-feedback');
        if ($feedback.length === 0) {
            $feedback = $('<div class="invalid-feedback"></div>');
            $field.after($feedback);
        }
        $feedback.text(message);
    }

    /**
     * Marca campo como válido
     */
    function setFieldValid($field, message = '') {
        $field.removeClass('is-invalid').addClass('is-valid');
        
        // Remover mensagem de erro
        $field.siblings('.invalid-feedback').remove();
        
        // Adicionar mensagem de sucesso se fornecida
        if (message) {
            let $feedback = $field.siblings('.valid-feedback');
            if ($feedback.length === 0) {
                $feedback = $('<div class="valid-feedback"></div>');
                $field.after($feedback);
            }
            $feedback.text(message);
        }
    }

    /**
     * Limpa validação do campo
     */
    function clearFieldValidation($field) {
        $field.removeClass('is-valid is-invalid');
        $field.siblings('.invalid-feedback, .valid-feedback').remove();
    }

    /**
     * Mostra mensagem
     */
    function showMessage(text, type) {
        const icons = {
            'success': 'check-circle',
            'danger': 'exclamation-triangle',
            'warning': 'exclamation-circle',
            'info': 'info-circle'
        };
        
        const $message = $('#mensagem');
        $message.removeClass().addClass(`alert alert-${type}`);
        $message.html(`<i class="fas fa-${icons[type] || 'info-circle'}"></i> ${text}`);
        $message.show();
        
        // Auto-hide para mensagens de sucesso
        if (type === 'success' || type === 'info') {
            setTimeout(hideMessage, 4000);
        }
        
        // Scroll para a mensagem
        $message[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * Esconde mensagem
     */
    function hideMessage() {
        $('#mensagem').hide();
    }

    // Adicionar indicador de força da senha
    if ($('#senha').length) {
        $('#senha').after('<div id="password-strength" class="form-text"></div>');
        
        $('#senha').on('keyup', function() {
            const senha = $(this).val();
            const $strength = $('#password-strength');
            
            if (!senha) {
                $strength.text('');
                return;
            }
            
            let score = 0;
            let feedback = [];
            
            if (senha.length >= 6) score++; else feedback.push('pelo menos 6 caracteres');
            if (/[a-z]/.test(senha)) score++; else feedback.push('letra minúscula');
            if (/[A-Z]/.test(senha)) score++; else feedback.push('letra maiúscula');
            if (/\d/.test(senha)) score++; else feedback.push('número');
            if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) score++; else feedback.push('caractere especial');
            
            let strengthText = '';
            let strengthClass = '';
            
            if (score <= 1) {
                strengthText = 'Muito fraca';
                strengthClass = 'text-danger';
            } else if (score === 2) {
                strengthText = 'Fraca';
                strengthClass = 'text-warning';
            } else if (score === 3) {
                strengthText = 'Média';
                strengthClass = 'text-info';
            } else if (score === 4) {
                strengthText = 'Forte';
                strengthClass = 'text-success';
            } else {
                strengthText = 'Muito forte';
                strengthClass = 'text-success fw-bold';
            }
            
            $strength.removeClass().addClass(`form-text ${strengthClass}`);
            $strength.text(`Força da senha: ${strengthText}`);
            
            if (feedback.length > 0 && score < 3) {
                $strength.append(`<br><small>Adicione: ${feedback.join(', ')}</small>`);
            }
        });
    }
});

