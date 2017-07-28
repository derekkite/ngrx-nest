import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Component} from "@nestjs/common";

export interface Action {
    type: string;
    payload?: any;
}

@Component()
export class Dispatcher extends BehaviorSubject<Action> {
    static INIT = '@ngrx/store/init';
    
    constructor() {
        super({type: Dispatcher.INIT});
    }
    
    dispatch(action: Action): void {
        this.next(action);
    }
    
    complete() {
        // noop
    }
}
