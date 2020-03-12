import { Test, TestingModule } from '@nestjs/testing';
import { BusCitiesService } from './bus-cities.service';

describe('BusCitiesService', () => {
  let service: BusCitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusCitiesService],
    }).compile();

    service = module.get<BusCitiesService>(BusCitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
