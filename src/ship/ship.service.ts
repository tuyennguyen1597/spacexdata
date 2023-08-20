import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';
import { Ship } from 'src/model/ship.entity';
import { ILike, Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { plainToClass } from 'class-transformer';
import { FilterShipDTO } from './dto/filter-ship.dto';
import { PageOptionsDTO } from 'src/common/dto/page-option.dto';
import { PageDTO } from 'src/common/dto/page.dto';
import { PaginationService } from 'src/utils/pagination.service';


@Injectable()
export class ShipService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(Ship) private readonly shipRepositoryService: Repository<Ship>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly paginationService: PaginationService
    ) { }

    async getShips(pageOption?: PageOptionsDTO): Promise<PageDTO<Ship>> {
        let ships: Ship[] = await this.cacheManager.get('ships');

        if (!ships || !ships.length) ships = await this.shipRepositoryService.find();

        if (!ships || !ships.length) ships = await this.fetchShips();
        
        return this.paginationService.withPage(ships, pageOption);
    }

    async fetchShips(reload: boolean = false) {
        const url = `${process.env.SPACEX_URL}/ships`
        let ships = await this.httpService.get(url).pipe(map(ship => ship.data)).toPromise();

        const shouldInsert: boolean = await this.shipRepositoryService.count() > 0 ? false : true;

        if (!shouldInsert) return ships;

        await this.insert(ships)
        
        return ships;
    }

    async filterShip(filter: FilterShipDTO, pageOption?: PageOptionsDTO) {
        if (!filter) return await this.getShips();

        const ships = await this.shipRepositoryService.findBy({
            homePort: filter.homePort !== undefined && ILike(`%${filter.homePort}%`),
            weight: filter.weight,
            type: filter.type
        })

        return this.paginationService.withPage(ships, pageOption);
    }

    async getDistictShipType() {
        const ships = await this.getShips();
        
        const distinctType = Array.from(new Set(ships.data.map(ship => ship.type)));
        
        return distinctType
    }

    async refresh(ships: Ship[]) {
        await this.shipRepositoryService.clear();
        await this.insert(ships)
    }

    async insert(ships: Ship[]) {
        const shipsToInsert: Ship[] = ships.map(ship => { return plainToClass(Ship, ship) });

        await this.shipRepositoryService.insert(shipsToInsert);

        ships = await this.shipRepositoryService.find();

        await this.cacheManager.set('ships', ships);

        return ships;
    }
}