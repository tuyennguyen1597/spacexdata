"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipModule = void 0;
const common_1 = require("@nestjs/common");
const ship_controller_1 = require("./ship.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ship_entity_1 = require("../model/ship.entity");
const axios_1 = require("@nestjs/axios");
const ship_service_1 = require("./ship.service");
const pagination_service_1 = require("../utils/pagination.service");
let ShipModule = class ShipModule {
};
ShipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ship_entity_1.Ship]), axios_1.HttpModule],
        controllers: [ship_controller_1.ShipController],
        providers: [ship_service_1.ShipService, pagination_service_1.PaginationService],
        exports: [ship_service_1.ShipService]
    })
], ShipModule);
exports.ShipModule = ShipModule;
;
//# sourceMappingURL=ship.module.js.map