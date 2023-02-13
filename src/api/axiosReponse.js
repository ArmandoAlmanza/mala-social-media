import axios from "./axios";

// All posts
export const getPosts = async () => axios.get("/post");
export const getPost = async (id) => axios.get("/post/" + id);

// New post
export const newPost = async (user) => axios.post("/post", user);

//Update like post
export const updateLike = async (id) => axios.put("/post/" + id);
