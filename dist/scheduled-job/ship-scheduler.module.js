"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipSchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const ship_module_1 = require("../ship/ship.module");
const ship_scheduler_service_1 = require("./ship-scheduler.service");
let ShipSchedulerModule = class ShipSchedulerModule {
};
ShipSchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [ship_module_1.ShipModule],
        providers: [ship_scheduler_service_1.ShipSchedulerService],
    })
], ShipSchedulerModule);
exports.ShipSchedulerModule = ShipSchedulerModule;
;
//# sourceMappingURL=ship-scheduler.module.js.map