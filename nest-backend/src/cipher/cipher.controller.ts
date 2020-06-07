import { Controller, Get, Post, Body } from '@nestjs/common';
import { Encryption } from 'src/interfaces/encryption.interface';
import { QUERIES } from '../assets/queries';
import { Input } from 'src/interfaces/input.interface';
import { CipherService } from './cipher.service';

@Controller('cipher')
export class CipherController {
    constructor(
        private cipherService: CipherService
    ) { }

    @Get()
    async getQueries(): Promise<Encryption[]> {
        return QUERIES;
    }

    @Post('add')
    async encryptInput(@Body() input: Input): Promise<Encryption> {
        return this.cipherService.getEncryptedString(input);
    }
}
