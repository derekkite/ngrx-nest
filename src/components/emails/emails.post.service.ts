import {MongoDb} from "../db/mongo.service";
import {Component, Shared} from "@nestjs/common";
import {Collection} from 'mongodb';

const EmailsCollectionName = 'emails';


@Shared()
@Component()
export class EmailsPostService {
    
    constructor(private mongoService: MongoDb) {
    }
    
    init() {
        return this.mongoService.getCollection(EmailsCollectionName);
    }
    
    
    addEmail(root, args) {
        return this.init()
            .concatMap(collection => {
                return this.mongoService.insertOne(collection, args)
                    .map(id => {
                        return {mresult: id['result']}
                    })
            })
    }
    
    updateEmail(root, args) {
        return this.init()
            .concatMap(collection => {
                delete args['_id'];
                let a = Object.assign({}, args);
                
                let fq = {
                    $set: a
                };
                // console.log('updateEmail query', args, fq);
                return this.mongoService.updateOne(collection, {tid: args.tid}, fq, {upsert: true, w: 1})
                    .map(id => {
                        return {mresult: id['result']}
                    })
            })
    }
    
    
    
}
