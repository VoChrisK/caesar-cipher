import { Injectable } from '@nestjs/common';
import { QUERIES } from '../assets/queries';
import { Input } from '../interfaces/input.interface';
import { Encryption } from 'src/interfaces/encryption.interface';

@Injectable()
export class CipherService {
    getEncryptedString(input: Input): Encryption {
        let encryptedString = [];
        const inputString = input.originalString;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        
        for(let i = 0; i < inputString.length; i++) {
            let char = inputString.charAt(i);

            if(char.match(uppercase)) {
                char = this.getNewCharacter(char, 65, input.offset);
            } else if(char.match(lowercase)) {
                char = this.getNewCharacter(char, 97, input.offset);
            }

            encryptedString.push(char);
        }

        const newString = encryptedString.join("");
        return this.createQuery(inputString, newString);
    }

    getNewCharacter(char: string, asciiCode: number, offset: number): string {
        let code = (char.charCodeAt(0) - asciiCode + offset) % 26;
        if(code < 0) code += 26;
        code += asciiCode;
        return String.fromCharCode(code);
    }

    createQuery(originalString: string, encryptedString: string): Encryption {
        const newQuery = {
            originalString: originalString,
            encryptedString: encryptedString
        };

        QUERIES.unshift(newQuery);
        return newQuery;
    }
}