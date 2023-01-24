package com.mala.user;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	private UserRepository userRepository;
	record newUserRequest (String name, String email, String password, String imagePath){}

	@GetMapping
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@PostMapping
	public User newUser(@RequestBody newUserRequest req){
		User user = new User();
		user.setName(req.name());
		user.setEmail(req.email());
		user.setPassword(req.password());
		user.setImagePath(req.imagePath());
		userRepository.save(user);
		return user;
	}

}
