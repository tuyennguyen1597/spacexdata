import { HttpService } from '@nestjs/axios';
import { Ship } from 'src/model/ship.entity';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { FilterShipDTO } from './dto/filter-ship.dto';
import { PageOptionsDTO } from 'src/common/dto/page-option.dto';
import { PageDTO } from 'src/common/dto/page.dto';
import { PaginationService } from 'src/utils/pagination.service';
export declare class ShipService {
    private readonly httpService;
    private readonly shipRepositoryService;
    private cacheManager;
    private readonly paginationService;
    constructor(httpService: HttpService, shipRepositoryService: Repository<Ship>, cacheManager: Cache, paginationService: PaginationService);
    getShips(pageOption?: PageOptionsDTO): Promise<PageDTO<Ship>>;
    fetchShips(reload?: boolean): Promise<any>;
    filterShip(filter: FilterShipDTO, pageOption?: PageOptionsDTO): Promise<PageDTO<Ship>>;
    getDistictShipType(): Promise<string[]>;
    refresh(ships: Ship[]): Promise<void>;
    insert(ships: Ship[]): Promise<Ship[]>;
}
