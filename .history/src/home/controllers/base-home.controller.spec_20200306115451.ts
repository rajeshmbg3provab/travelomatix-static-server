import { Test, TestingModule } from '@nestjs/testing';
import { Base.HomeController } from './base.home.controller';

describe('Base.Home Controller', () => {
  let controller: Base.HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Base.HomeController],
    }).compile();

    controller = module.get<Base.HomeController>(Base.HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
