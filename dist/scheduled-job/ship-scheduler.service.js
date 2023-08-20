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
var ShipSchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipSchedulerService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const ship_service_1 = require("../ship/ship.service");
let ShipSchedulerService = ShipSchedulerService_1 = class ShipSchedulerService {
    constructor(shipService) {
        this.shipService = shipService;
        this.logger = new common_1.Logger(ShipSchedulerService_1.name);
    }
    async handleShipReload() {
        await this.shipService.fetchShips(true);
        this.logger.log('Called to reload db');
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShipSchedulerService.prototype, "handleShipReload", null);
ShipSchedulerService = ShipSchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ship_service_1.ShipService])
], ShipSchedulerService);
exports.ShipSchedulerService = ShipSchedulerService;
//# sourceMappingURL=ship-scheduler.service.js.map