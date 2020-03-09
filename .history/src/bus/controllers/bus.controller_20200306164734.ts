import { Controller } from '@nestjs/common';
import { BaseBusController } from './base-bus.controller';

@Controller('bus')
export class BusController extends BaseBusController {
    constructor() {
        super()
    }
}
