import {Store} from '../store/store';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import {merge} from 'rxjs/observable/merge';
import {mergeEffects} from './effects';
import {Component, Inject} from "@nestjs/common";
import {Action, Dispatcher} from "../store/dispatcher";
import {effects} from "../../../../angularcli/triggers/src/app/reducers/effects";
import {OnModuleDestroy} from "@nestjs/common/interfaces/modules/on-destroy.interface";


@Component()
export class EffectsSubscription extends Subscription implements OnModuleDestroy {
    constructor(private dispatcher: Dispatcher) {
        super();
    }
    
    addEffects(effectInstances: any[]) {
        const sources = effectInstances.map(mergeEffects);
        const merged = merge(...sources);
        
        this.add(merged.subscribe(this.dispatcher));
    }
    
    onModuleDestroy() {
        if (!this.closed) {
            this.unsubscribe();
        }
    }
}
