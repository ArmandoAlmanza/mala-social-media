package com.mala.post;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
@RequestMapping("/api/post")
public class PostController {
	private final PostRepository postRepository;

	record newPostRequest(String body, String user) {
	}

	@GetMapping()
	public List<Post> getPosts() {
		return postRepository.findAll();
	}

	@GetMapping("{postId}")
	public Optional<Post> getPost(@PathVariable("postId") Integer id) {
		return postRepository.findById(id);
	}

	@PostMapping()
	public Post newPost(@RequestBody newPostRequest req) {
		Post post = new Post();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDateTime now = LocalDateTime.now();

		/* TODO create relations and add the user that create the post */
		post.setBody(req.body());
		post.setUser(req.user());
		post.setLikes(0);
		post.setCreationDate(dtf.format(now));
		postRepository.save(post);
		return post;
	}

	@PutMapping("{postId}")
	public String updateLike(@PathVariable("postId") Integer id) {
		Post post = postRepository.findById(id).get();

		var likes = post.getLikes();
		post.setLikes(likes + 1);

		post.setBody(post.getBody());
		post.setUser(post.getUser());
		post.setCreationDate(post.getCreationDate());

		postRepository.save(post);
		return "The like counter is: " + likes;
	}

}
