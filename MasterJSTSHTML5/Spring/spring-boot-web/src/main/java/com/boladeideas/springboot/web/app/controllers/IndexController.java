package com.boladeideas.springboot.web.app.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.boladeideas.springboot.web.app.models.Usuario;



@Controller
@RequestMapping("/app")
public class IndexController {
	
	@GetMapping({"/index","/","","/home"})
	public String index(Model model) {
		model.addAttribute("titulo","Hola Spring Framework con ModelAndView" );
		
		return "index";
	}
	
	@RequestMapping("/perfil")
	public String perfil(Model model) {
		Usuario usuario = new Usuario();
		usuario.setNombre("Andrés");
		usuario.setApellido("Apellido");
		usuario.setEmail("a@everis.com");
		model.addAttribute("titulo","Hola Spring Framework con ModelAndView ".concat(usuario.getNombre()) );
		model.addAttribute("usuario", usuario);
		return "perfil";
	}
	
	@RequestMapping("/listar")
	public String listar(Model model) {
		List <Usuario> usuarios = new ArrayList<>();
		usuarios.add(new Usuario("Andres","PEniscolon","a@everios.com"));
		usuarios.add(new Usuario("Miguel","PEniscolon","a@everios.com"));
		usuarios.add(new Usuario("Ivan","PEniscolon","a@everios.com"));
		model.addAttribute("titulo","Listado de usuarios" );
		model.addAttribute("usuarios", usuarios);
		return "listar";
	}
}
