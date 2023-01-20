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
exports.ParameterController = void 0;
const common_1 = require("@nestjs/common");
let ParameterController = class ParameterController {
    route(p) {
        console.log(p.age);
        return `{success: true, message: Hello ${p.name}, your age is ${p.age}}`;
    }
    query(q) {
        console.log(q);
        return `Hello ${q.name}, your age is ${q.age}`;
    }
    headers(h) {
        console.log(h);
        return "Headers extracted";
    }
};
__decorate([
    (0, common_1.Get)('/routeparameter/:age/:name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParameterController.prototype, "route", null);
__decorate([
    (0, common_1.Get)('/queryparameter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParameterController.prototype, "query", null);
__decorate([
    (0, common_1.Get)('/header'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParameterController.prototype, "headers", null);
ParameterController = __decorate([
    (0, common_1.Controller)('/parameters')
], ParameterController);
exports.ParameterController = ParameterController;
//# sourceMappingURL=parameters.controller.js.map