import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface PostRequest {
	title: string;
	content: string;
}

@Injectable()
export class PostService {
	constructor(private readonly prisma: PrismaService) {}

	async createPost({ title, content }: PostRequest) {
		const post = await this.prisma.post.create({
			data: {
				title,
				content,
			},
		});
		return post;
	}

	async listPosts() {
		const posts = await this.prisma.post.findMany({
			select: {
				id: true,
				title: true,
				content: true,
			},
		});
		return posts;
	}
}
