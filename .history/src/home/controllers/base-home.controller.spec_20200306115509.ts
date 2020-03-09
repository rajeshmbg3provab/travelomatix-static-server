import { Test, TestingModule } from '@nestjs/testing';
import { BaseHomeController } from './base-home.controller';

describe('Base.Home Controller', () => {
  let controller: BaseHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseHomeController],
    }).compile();

    controller = module.get<BaseHomeController>(BaseHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
