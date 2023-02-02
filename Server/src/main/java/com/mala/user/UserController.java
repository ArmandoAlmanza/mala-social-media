package com.mala.user;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {

	private final UserRepository userRepository;

	record newUserRequest(String name, String email, String password, String imagePath) {
	}

	@GetMapping
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@PostMapping
	public User newUser(@RequestBody newUserRequest req) {
		User user = new User();
		if (req.email() == null || req.email() == "") {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Need to add a user email");
		}

		if (req.imagePath() == null || req.imagePath() == "") {
			user.setImagePath("https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg");
		} else {
			user.setImagePath(req.imagePath());
		}
		
		user.setName(req.name());
		user.setEmail(req.email());
		user.setPassword(req.password());
		userRepository.save(user);
		return user;
	}

}
