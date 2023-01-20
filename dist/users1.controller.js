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
exports.users1 = void 0;
const common_1 = require("@nestjs/common");
let users1 = class users1 {
    method2(age, name) {
        return ` Hello ${name}, your age is ${age} `;
    }
    method3(age, name) {
        return ` Hello ${name}, your age is ${age} `;
    }
    method4(age, name) {
        return ` Hello ${name}, your age is ${age} `;
    }
};
__decorate([
    (0, common_1.Put)('profile/:age/:name'),
    __param(0, (0, common_1.Param)("age", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], users1.prototype, "method2", null);
__decorate([
    (0, common_1.Put)('/profile1'),
    __param(0, (0, common_1.Query)("age", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], users1.prototype, "method3", null);
__decorate([
    (0, common_1.Put)('/Profile3'),
    __param(0, (0, common_1.Body)("age", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], users1.prototype, "method4", null);
users1 = __decorate([
    (0, common_1.Controller)('/users1')
], users1);
exports.users1 = users1;
//# sourceMappingURL=users1.controller.js.map