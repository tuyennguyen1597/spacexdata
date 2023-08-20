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
exports.Ship = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
let Ship = class Ship {
};
__decorate([
    (0, class_transformer_1.Expose)({ name: 'ship_id' }),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Ship.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'ship_type' }),
    (0, typeorm_1.Column)({ name: 'type' }),
    __metadata("design:type", String)
], Ship.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'weight_kg' }),
    (0, typeorm_1.Column)({ name: 'weight', nullable: true }),
    __metadata("design:type", Number)
], Ship.prototype, "weight", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'home_port' }),
    (0, typeorm_1.Column)({ name: 'home_port' }),
    __metadata("design:type", String)
], Ship.prototype, "homePort", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'ship_name' }),
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], Ship.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'class', nullable: true }),
    __metadata("design:type", String)
], Ship.prototype, "class", void 0);
Ship = __decorate([
    (0, typeorm_1.Entity)({ name: 'ship' })
], Ship);
exports.Ship = Ship;
//# sourceMappingURL=ship.entity.js.map