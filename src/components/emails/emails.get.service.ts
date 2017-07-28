import {MongoDb} from "../db/mongo.service";
import {Component, Shared} from "@nestjs/common";
import {Collection} from 'mongodb';


const EmailsCollectionName = 'emails';


@Shared()
@Component()
export class EmailsGetService {
    
    constructor(private mongoService: MongoDb) {
    }
    
    init() {
        return this.mongoService.getCollection(EmailsCollectionName);
    }
    
    getEmailList(root, args) {
        // console.log('getEmailList');
        // args is a query
        return this.init()
            .concatMap(collection => {
                // console.log('getEmailList', args);
                return this.mongoService.find(collection, args)
                
            })
    }
}