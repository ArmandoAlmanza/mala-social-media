package com.mala;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:300")
public class MalaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MalaServerApplication.class, args);
	}

}
