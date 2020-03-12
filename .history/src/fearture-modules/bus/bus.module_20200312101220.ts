import { Module, forwardRef } from '@nestjs/common';
import { BusController } from './controllers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  controllers: [BusController],
  providers: [],
  imports: [forwardRef(() => DatabaseModule)]
})
export class BusModule {}
