import { ShipService } from './ship.service';
import { FilterShipDTO } from './dto/filter-ship.dto';
import { PageOptionsDTO } from 'src/common/dto/page-option.dto';
export declare class ShipController {
    private readonly shipService;
    constructor(shipService: ShipService);
    getShips(pageOption: PageOptionsDTO): Promise<import("../common/dto/page.dto").PageDTO<import("../model/ship.entity").Ship>>;
    filterShip(filter: FilterShipDTO, pageOption: PageOptionsDTO): Promise<import("../common/dto/page.dto").PageDTO<import("../model/ship.entity").Ship>>;
    getDistictShipType(): Promise<string[]>;
}
