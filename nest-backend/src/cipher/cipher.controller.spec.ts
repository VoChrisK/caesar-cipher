import { Test, TestingModule } from '@nestjs/testing';
import { CipherController } from './cipher.controller';

describe('Cipher Controller', () => {
  let controller: CipherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CipherController],
    }).compile();

    controller = module.get<CipherController>(CipherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
