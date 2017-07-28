import { Module } from '@nestjs/common';
import {TapiController} from "../controllers/tapi.controller";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {StorageService} from "../components/users/storage.service";
import {AuthCheck} from "../components/users/auth.middleware";
import {StoreModule} from "../components/store/store.module";



@Module({
    components: [
        StorageService
    ],
    modules: [
        StoreModule
    ],
    controllers: [
        TapiController
    ]
    
})

export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthCheck).forRoutes(TapiController);
    }
}
