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
exports.PaginationService = void 0;
const common_1 = require("@nestjs/common");
const page_meta_dto_1 = require("../common/dto/page-meta.dto");
const page_dto_1 = require("../common/dto/page.dto");
let PaginationService = class PaginationService {
    constructor() { }
    async withPage(ships, pageOption) {
        if (!pageOption)
            pageOption = { page: 1, take: ships.length, skip: 0 };
        const pageMeta = new page_meta_dto_1.PageMetaDto({
            pageOptionsDto: pageOption,
            itemCount: ships.length,
        });
        return new page_dto_1.PageDTO(ships.slice((pageOption.page - 1) * pageOption.take, pageOption.page * pageOption.take), pageMeta);
    }
};
PaginationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PaginationService);
exports.PaginationService = PaginationService;
//# sourceMappingURL=pagination.service.js.map