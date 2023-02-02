package com.mala.post;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@AllArgsConstructor
@RestController
@RequestMapping("/api/post")
public class PostController {
	private final PostRepository postRepository;

	record newPostRequest(String title, String body, String user, boolean like) {
	}

	@GetMapping()
	public List<Post> getPosts() {
		return postRepository.findAll();
	}

	@PostMapping()
	public Post addPost(@RequestBody newPostRequest req) {
		Post post = new Post();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDateTime now = LocalDateTime.now();

		/* TODO create relations and add the user that create the post */
		post.setTitle(req.title());
		post.setBody(req.body());
		post.setUser(req.user());
		post.setLike(req.like());
		post.setCreationDate(dtf.format(now));

		return post;
	}

}
