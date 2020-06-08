## Caesar Cipher

Caesar Cipher is an encryption technique where characters in a word or a phrase are shifted up or down in the alphabet 
based on the offset. This is a full-stack solution implementing this technique: users provide a word or phrase and an offset
and get the corresponding encryption.

![alt screenshot](https://github.com/VoChrisK/caesar-cipher/blob/master/angular-frontend/src/assets/screenshot.jpg)

## Technologies Used
* Angular 8
* Node.js 12.14.0
* Nest.js
* Jest

## Installation and Set-up
### 1. Clone this repository
`git clone https://github.com/VoChrisK/caesar-cipher.git`

### 2. Install Angular 8
`npm install -g @angular/cli@8.0.0`

### 3. Install Nest.js
`npm install -g @nestjs/cli`

### 4. Install or update Node.js to version 12.14.0 or later
`nvm install` or `nvm install 12.14.0`

### 5. Install dependencies
`npm run install-dependencies`

### 6. Start the app!
`npm run dev`

## Features

* Users are able to enter a word or phrase and an offset in the text fields and will output the encrypted version

* The page will visually keep track of previous encryptions (or queries)

## Caesar Cipher Technique

When a word or phrase is entered in the text field, it will be sent to the backend as an HTTP POST request. The backend will process the input string with my implementation of Caesar Cipher. Basically for each character, it will check whether it is an uppercase or lowercase letter (this is done by RegEx). Then, it will compute the new character by calculating its new ASCII code. The result is sent back to the client as the response and is shown in the page.

Here is a code snippet demonstrating my implementation of Caesar Cipher:

```ts
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
```
