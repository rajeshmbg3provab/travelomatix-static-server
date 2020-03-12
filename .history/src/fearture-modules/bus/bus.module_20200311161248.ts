import { Module, forwardRef } from '@nestjs/common';
import { BusController } from './controllers';
import { BusCitiesService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [BusController],
  providers: [BusCitiesService],
  imports: [forwardRef(() => DatabaseModule)]
})
export class BusModule {}
