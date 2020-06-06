import { Module } from '@nestjs/common';
import { CipherController } from './cipher.controller';
import { CipherService } from './cipher.service';

@Module({
  controllers: [CipherController],
  providers: [CipherService]
})
export class CipherModule {}
