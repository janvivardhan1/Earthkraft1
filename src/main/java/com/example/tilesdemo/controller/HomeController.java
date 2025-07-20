package com.example.tilesdemo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String loadHomePage() {
        return "index"; // maps to tiles.xml definition
    }
    
    @GetMapping("/login")
    public String showLogin(HttpServletRequest request, Model model) {
        
            return "login"; // Tiles definition name (if full page load)
        
    }

    @GetMapping("/register")
    public String showRegister(HttpServletRequest request, Model model) {
        
            return "register"; // Use Tiles if full page navigation
        
    }
}
