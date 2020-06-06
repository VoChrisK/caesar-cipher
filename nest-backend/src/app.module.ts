import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CipherModule } from './cipher/cipher.module';

@Module({
  imports: [CipherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
