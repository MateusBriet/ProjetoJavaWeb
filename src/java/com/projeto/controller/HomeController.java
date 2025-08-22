package com.projeto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Controlador principal da aplicação
 * Atividade Prática 1: Configuração básica do Spring MVC
 */
@Controller
public class HomeController {
    
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }
    
    @RequestMapping(value = "/endereco", method = RequestMethod.GET)
    public String endereco() {
        return "endereco";
    }
    
    @RequestMapping(value = "/cadastro", method = RequestMethod.GET)
    public String cadastro() {
        return "cadastro";
    }
}

