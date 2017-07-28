import {Component, Shared} from "@nestjs/common";
import {combineReducers} from "../../ngrx/store/utils";
import {Store} from "../../ngrx/store/store";
import {Dispatcher} from "../../ngrx/store/dispatcher";
import {Reducer} from "../../ngrx/store/reducer";
import {State} from "../../ngrx/store/state";

@Shared()
@Component()
export class NgrxStore {
    
    
    
    Store: any;
    Reducer: any;
    State: any = {};
    
    constructor(private dispatcher: Dispatcher) {}
    
    
    private initialReducerFactory(reducer) {
        if (typeof reducer === 'function') {
            return reducer;
        }
        return combineReducers(reducer);
    }
    
    private initialStateFactory(initialState, reducer) {
        if (!initialState) {
            return reducer(undefined, {type: Dispatcher.INIT});
        }
        return initialState;
    }
    
    private storeFactory(dispatcher, reducer, state$) {
        return new Store(dispatcher, reducer, state$);
    }
    
    private stateFactory(initialState: any, dispatcher: Dispatcher, reducer: Reducer) {
        return new State(initialState, dispatcher, reducer);
    }
    
    private reducerFactory(dispatcher, reducer) {
        return new Reducer(dispatcher, reducer);
    }
    
    
    public createStore(_reducer: any, _initialState?: any) {
        
        this.Reducer = this.reducerFactory(
            this.dispatcher,
            this.initialReducerFactory(_reducer)
        );
        
        this.State = this.stateFactory(
            this.initialStateFactory(this.State, this.Reducer),
            this.dispatcher,
            this.Reducer
        );
        
        this.Store = this.storeFactory(
            this.dispatcher,
            this.Reducer,
            this.State
        );
    }
    
    
}

