import { Module, forwardRef } from '@nestjs/common';

import { FlightController } from './controllers';
import { DatabaseModule } from '@database/database.module';

@Module({
  imports: [forwardRef( () => DatabaseModule)],
  controllers: [ FlightController ],
  providers: [ ]
})
export class FlightModule {}
