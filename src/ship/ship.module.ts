import { Module } from '@nestjs/common';
import { ShipController } from './ship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ship } from 'src/model/ship.entity';
import { HttpModule } from '@nestjs/axios';
import { ShipService } from './ship.service';
import { PaginationService } from 'src/utils/pagination.service';


@Module({
    imports: [TypeOrmModule.forFeature([Ship]), HttpModule],
    controllers: [ShipController],
    providers: [ShipService, PaginationService],
    exports: [ShipService]
})
export class ShipModule {};