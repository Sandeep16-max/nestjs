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
const users_controller_1 = require("./users.controller");
const albums_controller_1 = require("./albums.controller");
const parameters_controller_1 = require("./parameters.controller");
const datatransfer_controller_1 = require("./datatransfer.controller");
const CRUD_controller_1 = require("./CRUD.controller");
const p_controller_1 = require("./p.controller");
const injectable_controller_1 = require("./injectable.controller");
const valueprovider_controller_1 = require("./valueprovider.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController, albums_controller_1.AlbumsController, parameters_controller_1.ParameterController, datatransfer_controller_1.DataController, CRUD_controller_1.Operation, p_controller_1.p, injectable_controller_1.pap, valueprovider_controller_1.valueprovider],
        providers: [{ provide: "Database_name", useValue: "db001" },
            { provide: "Mail", useValue: ["sandeeplakhina16@gmail.com", "sam@getMaxListeners.com"] }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map