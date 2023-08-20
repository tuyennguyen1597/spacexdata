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
exports.ShipController = void 0;
const common_1 = require("@nestjs/common");
const ship_service_1 = require("./ship.service");
const filter_ship_dto_1 = require("./dto/filter-ship.dto");
const page_option_dto_1 = require("../common/dto/page-option.dto");
let ShipController = class ShipController {
    constructor(shipService) {
        this.shipService = shipService;
    }
    async getShips(pageOption) {
        try {
            return await this.shipService.getShips(pageOption);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async filterShip(filter, pageOption) {
        try {
            return await this.shipService.filterShip(filter, pageOption);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getDistictShipType() {
        try {
            return await this.shipService.getDistictShipType();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)('ships'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_option_dto_1.PageOptionsDTO]),
    __metadata("design:returntype", Promise)
], ShipController.prototype, "getShips", null);
__decorate([
    (0, common_1.Get)('ship'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_ship_dto_1.FilterShipDTO, page_option_dto_1.PageOptionsDTO]),
    __metadata("design:returntype", Promise)
], ShipController.prototype, "filterShip", null);
__decorate([
    (0, common_1.Get)('ships/types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShipController.prototype, "getDistictShipType", null);
ShipController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [ship_service_1.ShipService])
], ShipController);
exports.ShipController = ShipController;
//# sourceMappingURL=ship.controller.js.map