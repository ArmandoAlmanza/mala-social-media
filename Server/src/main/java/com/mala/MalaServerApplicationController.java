package com.mala;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class MalaServerApplicationController {
	record Message(String message) {
	}

	@GetMapping()
	public Message greeting() {
		return new Message(
				"Welcome to MALA API. You can use the /user, /post, /likes for the data. This is just a learning project");
	}
}
