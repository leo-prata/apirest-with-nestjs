import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
	imports: [PrismaModule],
	controllers: [PostController],
	providers: [PostService],
})
export class PostModule {}
