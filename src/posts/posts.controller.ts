import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './posts.service';

interface PostRequest {
	title: string;
	content: string;
}

@Controller('posts')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Post()
	async createPost(@Body() { title, content }: PostRequest) {
		const post = await this.postService.createPost({ title, content });
		return post;
	}

	@Get()
	async listPosts() {
		const posts = await this.postService.listPosts();
		return posts;
	}
}
