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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
let recNum = 1;
function getRecommendations() {
    recNum += 1;
    if (recNum > 5) {
        return (recNum = 1);
    }
    return recNum < 5;
}
let UsersController = class UsersController {
    getShow() {
        return { message: "I am not going to show" };
    }
    redirectNetflix() {
        return {
            shows: ["Dark", "Sabrina"],
            message: "Netflix Redirect",
            isRedirectPath: true,
        };
    }
    getRecommendations() {
        const areLatestArrivals = getRecommendations();
        if (areLatestArrivals) {
            return {
                url: "/users/latest-shows",
                statusCode: 302,
            };
        }
        else {
            return {
                url: "netflix",
            };
        }
    }
    getLatestShows() {
        return {
            shows: ["Stanger Things 4", "Money Heist"],
            message: "Latest shows Redirect",
        };
    }
};
__decorate([
    (0, common_1.Get)("shows"),
    (0, common_1.Redirect)("/users/netflix", 302),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getShow", null);
__decorate([
    (0, common_1.Get)("netflix"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "redirectNetflix", null);
__decorate([
    (0, common_1.Get)("recommendations"),
    (0, common_1.Redirect)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getRecommendations", null);
__decorate([
    (0, common_1.Get)("latest-shows"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getLatestShows", null);
UsersController = __decorate([
    (0, common_1.Controller)("users")
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=pappu.controller.js.map