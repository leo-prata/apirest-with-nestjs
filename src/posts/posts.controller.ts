import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
	constructor(private readonly postService: PostService) {}

	@Post()
	async createPost(@Body() postDto: CreatePostDto) {
		const post = await this.postService.createPost(postDto);
		return post;
	}

	@Get()
	async listPosts() {
		const posts = await this.postService.listPosts();
		return posts;
	}

	@Patch(':id')
	updatePost(@Param('id') id: string, @Body() postDto: UpdatePostDto) {
		return this.postService.updatePost(Number(id), postDto);
	}
}
