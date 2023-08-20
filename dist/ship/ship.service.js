"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const ship_entity_1 = require("../model/ship.entity");
const typeorm_2 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const pagination_service_1 = require("../utils/pagination.service");
let ShipService = class ShipService {
    constructor(httpService, shipRepositoryService, cacheManager, paginationService) {
        this.httpService = httpService;
        this.shipRepositoryService = shipRepositoryService;
        this.cacheManager = cacheManager;
        this.paginationService = paginationService;
    }
    async getShips(pageOption) {
        let ships = await this.cacheManager.get('ships');
        if (!ships || !ships.length)
            ships = await this.shipRepositoryService.find();
        if (!ships || !ships.length)
            ships = await this.fetchShips();
        return this.paginationService.withPage(ships, pageOption);
    }
    async fetchShips(reload = false) {
        const url = `${process.env.SPACEX_URL}/ships`;
        let ships = await this.httpService.get(url).pipe((0, rxjs_1.map)(ship => ship.data)).toPromise();
        const shouldInsert = await this.shipRepositoryService.count() > 0 ? false : true;
        if (!shouldInsert)
            return ships;
        await this.insert(ships);
        return ships;
    }
    async filterShip(filter, pageOption) {
        if (!filter)
            return await this.getShips();
        const ships = await this.shipRepositoryService.findBy({
            homePort: filter.homePort !== undefined && (0, typeorm_2.ILike)(`%${filter.homePort}%`),
            weight: filter.weight,
            type: filter.type
        });
        return this.paginationService.withPage(ships, pageOption);
    }
    async getDistictShipType() {
        const ships = await this.getShips();
        const distinctType = Array.from(new Set(ships.data.map(ship => ship.type)));
        return distinctType;
    }
    async refresh(ships) {
        await this.shipRepositoryService.clear();
        await this.insert(ships);
    }
    async insert(ships) {
        const shipsToInsert = ships.map(ship => { return (0, class_transformer_1.plainToClass)(ship_entity_1.Ship, ship); });
        await this.shipRepositoryService.insert(shipsToInsert);
        ships = await this.shipRepositoryService.find();
        await this.cacheManager.set('ships', ships);
        return ships;
    }
};
ShipService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(ship_entity_1.Ship)),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        typeorm_2.Repository, Object, pagination_service_1.PaginationService])
], ShipService);
exports.ShipService = ShipService;
//# sourceMappingURL=ship.service.js.map