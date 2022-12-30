package com.boladeideas.springboot.web.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/variables")
public class EjemploVariablesRutaController {
	
	@GetMapping("/")
	public String index(Model model){
		model.addAttribute("titulo", "Enviar parámetros (@PathVariable)");
		return "variables/index";	
	}
	
	@GetMapping("/string/{texto}")
	public String variables(@PathVariable String texto,Model model) {
		model.addAttribute("titulo", "Recibir parámetros (@PathVariable)");
		model.addAttribute("resultado", "El texto enviado es: '"+texto +"'");
		return "variables/ver";
	}
	
	@GetMapping("/string/{texto}/{numero}")
	public String variables(@PathVariable String texto,
			@PathVariable String numero,
			Model model) {
		model.addAttribute("titulo", "Recibir parámetros (@PathVariable)");
		model.addAttribute("resultado", "El texto enviado es: '"+texto +
				"' El número enviado en el path es  "+ numero);
		return "variables/ver";
	}

}
