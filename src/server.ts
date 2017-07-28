import './vendor';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import {ApplicationModule} from "./modules/app.module";




const instance = express();
instance.use(bodyparser.json());
instance.use(bodyparser.urlencoded({ extended: false }));
instance.options('*', cors());
instance.use(cors());
const app = NestFactory.create(ApplicationModule, instance);
app.listen(4200, () => console.log('Application is listening on port 4200'));
