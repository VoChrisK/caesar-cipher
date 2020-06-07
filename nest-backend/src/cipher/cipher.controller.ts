import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
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

    @Post()
    async encryptInput(@Body() input: Input): Promise<String> {
        return this.cipherService.getEncryptedString(input);
    }
}
