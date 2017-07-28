import {Action, Dispatcher} from '../store/dispatcher';
import {Observable} from 'rxjs/Observable';
import {Operator} from 'rxjs/Operator';
import {filter} from 'rxjs/operator/filter';
import {Component, Inject} from "@nestjs/common";



@Component()
export class Actions extends Observable<Action> {
    constructor(@Inject(Dispatcher) actionsSubject: Observable<Action>) {
        super();
        this.source = actionsSubject;
        // console.log('Actions', this.source);
        
    }
    
    lift(operator: Operator<any, Action>): Observable<Action> {
        const observable = new Actions(this);
        observable.operator = operator;
        return observable;
    }
    
    ofType(...keys: string[]): Actions {
        return filter.call(this, ({type}: { type: string }) => {
            const len = keys.length;
            if (len === 1) {
                return type === keys[0];
            } else {
                for (let i = 0; i < len; i++) {
                    if (keys[i] === type) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}