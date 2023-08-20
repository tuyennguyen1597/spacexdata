import { ShipService } from 'src/ship/ship.service';
export declare class ShipSchedulerService {
    private readonly shipService;
    private readonly logger;
    constructor(shipService: ShipService);
    handleShipReload(): Promise<void>;
}
