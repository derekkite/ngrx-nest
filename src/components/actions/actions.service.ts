import {Component, HttpStatus} from "@nestjs/common";
import {Selectors} from "../store/selectors/selectors";
import {Subject} from "rxjs/Subject";
import {ServerErr} from "../../../../angularcli/triggers/src/app/reducers/connection/services/server_error.const";
import {NgrxStore} from "../store/ngrx.store.init";
import {Observable} from "rxjs/Observable";


export interface TAction {
    type: string;
    payload: any;
    res: any;
}


@Component()
export class ActionsService {
    
    
    onDestroy$;
    
    constructor(private s: NgrxStore,
                private sel: Selectors
    ) {}
    
    dispatchGetAction(req, res)  {
        let a = <TAction>{};
        if (req['type'] && req['payload']) {
            // console.log('dispatchPostAction type', req['type']);
            a['type'] = req['type'];
            // console.log('dispatchPostAction payload', req['payload']);
            a['payload'] = req['payload']
        } else {
            console.log('no user, type or payload', req);
            res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: ServerErr.reqformatError});
        }
        a['res'] = res;
        this.s.Store.dispatch(a);
        this.sel.getSelector(a)
            .take(1)
            .subscribe(data => {
                // console.log('dispatchGetAction', data);
                if (data.err) {
                    res.status(401).send(data.err)
                } else {
                    res.status(HttpStatus.OK).send(data);
                }
            })
    }
    
    dispatchPostAction(req, res)  {
        let a = <TAction>{};
        if (req['type'] && req['payload']) {
            // console.log('dispatchPostAction type', req['type']);
            a['type'] = req['type'];
            // console.log('dispatchPostAction payload', req['payload']);
            a['payload'] = req['payload']
        } else {
            console.log('no user, type or payload', req);
            res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: ServerErr.reqformatError});
        }
        a['sub'] = new Subject<any>();
        a['res'] = res;
        // console.log('dispatchPostAction', a.type);
        this.s.Store.dispatch(a);
        a['sub']
            .timeoutWith(25000, Observable.of('timeout'))
            .subscribe({
                next: r => {
                    if (r === 'timeout') {
                        console.log('no post action', a['type']);
                        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Undefined Action');
                    } else {
                        res.status(HttpStatus.OK).send(r);
                    }
                },
                error: err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err)
            })
    }
}
