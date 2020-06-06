import { Injectable } from '@nestjs/common';
import { QUERIES } from '../assets/queries';
import { Input } from '../interfaces/input.interface';

@Injectable()
export class CipherService {
    getEncryptedString(input: Input) {
    }
}