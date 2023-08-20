import { Module } from '@nestjs/common';
import { ShipModule } from 'src/ship/ship.module';
import { ShipSchedulerService } from './ship-scheduler.service';

@Module({
    imports: [ShipModule],
    providers: [ShipSchedulerService],
})
export class ShipSchedulerModule {};