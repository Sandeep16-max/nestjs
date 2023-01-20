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
exports.Operation = void 0;
const common_1 = require("@nestjs/common");
const userinfo_1 = require("./DTO/userinfo");
let USERS = [];
let Operation = class Operation {
    adduser(b) {
        USERS.push(b);
        return "user added";
    }
    alluser() {
        return USERS;
    }
    oneuser(p) {
        return USERS.find(user => user.id == p);
    }
    updateuser(b, p) {
        const indx = USERS.findIndex(user => user.id == p);
        if (!indx) {
            return;
        }
        else {
            USERS[indx] = b;
            return "updated";
        }
    }
    deleteuser(p) {
        USERS.filter(user => user.id != p);
        return "deleted";
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userinfo_1.userinfo]),
    __metadata("design:returntype", void 0)
], Operation.prototype, "adduser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Operation.prototype, "alluser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Operation.prototype, "oneuser", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userinfo_1.userinfo, Number]),
    __metadata("design:returntype", void 0)
], Operation.prototype, "updateuser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Operation.prototype, "deleteuser", null);
Operation = __decorate([
    (0, common_1.Controller)('/operation')
], Operation);
exports.Operation = Operation;
//# sourceMappingURL=CRUD.controller.js.map