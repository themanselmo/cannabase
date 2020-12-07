package com.example.cannabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.cannabase.model.User;
import com.example.cannabase.repository.UserRepository;

@SpringBootApplication
public class CannabaseApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CannabaseApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Max", "Anselmo", "maxedwans@gmail.com"));
		this.userRepository.save(new User("Richie", "DeDonato", "RichieD@gmail.com"));
		this.userRepository.save(new User("Victoria", "Diana", "VickieD@gmail.com"));
	}

}
