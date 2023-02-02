package com.mala.post;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "post")
public class Post {
	private String title;
	private String body;
	private String user;
	private boolean like;
	private String creationDate;
}
