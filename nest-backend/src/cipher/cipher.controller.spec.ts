import { Test, TestingModule } from '@nestjs/testing';
import { CipherController } from './cipher.controller';
import { CipherService } from './cipher.service';
import { QUERIES } from '../assets/queries';

describe('Cipher Controller', () => {
  let cipherController: CipherController;
  let cipherService: CipherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CipherController],
      providers: [CipherService]
    }).compile();

    cipherController = module.get<CipherController>(CipherController);
    cipherService = module.get<CipherService>(CipherService);
  });

  it('should be defined', () => {
    expect(cipherController).toBeDefined();
  });

  describe('getQueries', () => {
    it('should return an array of all previous queries', async () => {
      expect(await cipherController.getQueries()).toBe(QUERIES);
    });
  });

  //I am unsure whether this violates unit testing or not
  describe('encryptInput', () => {
    it('should encrypt the input string and returns the encrypted string', async () => {
      const input = {
        originalString: "I love JavaScript!",
        offset: 100
      };
      const spy = jest.spyOn(cipherService, 'getEncryptedString');
      const result = cipherService.getEncryptedString(input);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveReturnedWith(result);
      expect(await cipherController.encryptInput(input)).toMatchObject(result);
    });
  });
});
