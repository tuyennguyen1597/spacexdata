import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ShipService } from './ship.service';
import { FilterShipDTO } from './dto/filter-ship.dto';
import { PageOptionsDTO } from 'src/common/dto/page-option.dto';

@Controller('')
export class ShipController {
    constructor(
        private readonly shipService: ShipService
    ) { }

    @Get('ships')
    async getShips(@Query() pageOption: PageOptionsDTO) {
        try {
            return await this.shipService.getShips(pageOption);
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('ship')
    async filterShip(@Query() filter: FilterShipDTO, @Query() pageOption: PageOptionsDTO) {
        try {
            return await this.shipService.filterShip(filter, pageOption);
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('ships/types')
    async getDistictShipType() {
        try {
            return await this.shipService.getDistictShipType();
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}