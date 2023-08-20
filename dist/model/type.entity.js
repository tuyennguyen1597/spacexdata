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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipType = void 0;
const typeorm_1 = require("typeorm");
const ship_entity_1 = require("./ship.entity");
const class_transformer_1 = require("class-transformer");
let ShipType = class ShipType {
};
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ShipType.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'ship_type' }),
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], ShipType.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToMany)(() => ship_entity_1.Ship, ship => ship.type),
    __metadata("design:type", Array)
], ShipType.prototype, "ships", void 0);
ShipType = __decorate([
    (0, typeorm_1.Entity)({ name: 'type' })
], ShipType);
exports.ShipType = ShipType;
//# sourceMappingURL=type.entity.js.map