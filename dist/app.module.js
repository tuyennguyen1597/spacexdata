"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ship_entity_1 = require("./model/ship.entity");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const ship_module_1 = require("./ship/ship.module");
const schedule_1 = require("@nestjs/schedule");
const ship_scheduler_module_1 = require("./scheduled-job/ship-scheduler.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule,
            ship_module_1.ShipModule,
            ship_scheduler_module_1.ShipSchedulerModule,
            config_1.ConfigModule.forRoot(),
            cache_manager_1.CacheModule.register({
                isGlobal: true
            }),
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root1234',
                database: 'spacex_ship',
                entities: [ship_entity_1.Ship],
                synchronize: true,
                insecureAuth: false
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map