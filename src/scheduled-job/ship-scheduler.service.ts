import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ShipService } from 'src/ship/ship.service';

@Injectable()
export class ShipSchedulerService {
    private readonly logger = new Logger(ShipSchedulerService.name);
    constructor(
        private readonly shipService: ShipService
    ) {}
    
    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async handleShipReload() {
        await this.shipService.fetchShips(true);
        this.logger.log('Called to reload db')
    }
}