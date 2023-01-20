import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { ParameterController } from './parameters.controller';
import { DataController } from './datatransfer.controller';
import { Operation } from './CRUD.controller';
import { p } from './p.controller';
import { UsersStore } from "./stores/store";
import { Store } from "./stores/sss";
import { pap } from './injectable.controller';
import { valueprovider } from './valueprovider.controller';
import { getMaxListeners } from 'process';

@Module({
  controllers: [UsersController, AlbumsController, ParameterController, DataController, Operation, p, pap, valueprovider],
  // providers:[{provide: "store", useClass:UsersStore}]
  //as injection token and class name is same we can also write it as 
  //providers:[UsersStore,{provide: "Store", useExisting:UsersStore}],
  // agr hm chahte hai Store inject me likhne pr b UsersStore valli class call ho to useExisting
  providers:[{provide: "Database_name", useValue:"db001"},
             {provide: "Mail", useValue:["sandeeplakhina16@gmail.com","sam@getMaxListeners.com"]}]
})
export class AppModule {}
