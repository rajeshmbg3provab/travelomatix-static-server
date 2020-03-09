import { Module } from '@nestjs/common';
import { Conf } from './conf';

@Module({
    imports: [Conf]
})
export class ConfModule {}
