import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './posts/posts.module';

@Module({
	imports: [PrismaModule, PostModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
