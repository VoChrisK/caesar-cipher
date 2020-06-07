import { Injectable } from '@nestjs/common';
import { QUERIES } from '../assets/queries';
import { Input } from '../interfaces/input.interface';

@Injectable()
export class CipherService {
    getEncryptedString(input: Input): string {
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
        QUERIES.unshift(newString)
        return encryptedString.join("");
    }

    getNewCharacter(char: string, asciiCode: number, offset: number): string {
        let code = (char.charCodeAt(0) - asciiCode + offset) % 26;
        code += asciiCode;
        return String.fromCharCode(code);
    }

    addStringToQueries(encryptedString: string): void {
        QUERIES.unshift(newString)
    }
}