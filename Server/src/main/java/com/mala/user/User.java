package com.mala.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User {
	private String name;
	private String lastName;
	private String email;
	private String password;
	private String imagePath;
}
