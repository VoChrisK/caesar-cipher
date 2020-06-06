import { Test, TestingModule } from '@nestjs/testing';
import { CipherService } from './cipher.service';
import { QUERIES } from '../assets/queries';
import { Encryption } from '../interfaces/encryption.interface';

describe('CipherService', () => {
  let cipherService: CipherService;
  let queries: Array<Encryption>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CipherService],
    }).compile();

    cipherService = module.get<CipherService>(CipherService);
  });

  it('should be defined', () => {
    expect(cipherService).toBeDefined();
  });

  describe('getEncryptedString', () => {
    it('should return an encrypted version of the input string', () => {
      const encryptedString1 = 'E hkra FwrwOynelp!'
      const input1 = {
        originalString: "I love JavaScript!",
        offset: 100
      };

      const res1 = cipherService.getEncryptedString(input1);

      expect(res1).toEqual(encryptedString1);

      const encryptedString2 = 'AsppwQmsn';
      const input2 = {
        originalString: "CurrySoup",
        offset: -2
      };
      const res2 = cipherService.getEncryptedString(input2);

      expect(res2).toEqual(encryptedString2);
    });

    it('should save the input and encrypted string to the previous queries data file', () => {
      const entry = {
        originalString: 'I love JavaScript!', 
        encryptedString: 'E hkra FwrwOynelp!'
      };

      const input = {
        originalString: "I love JavaScript!",
        offset: 100
      }

      cipherService.getEncryptedString(input);

      expect(QUERIES[0]).toMatchObject(entry);
    });
  });
});