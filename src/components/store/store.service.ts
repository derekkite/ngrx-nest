import {Component, Shared} from "@nestjs/common";
import {OnModuleInit} from "@nestjs/common/interfaces/modules";
import {AppReducers} from "./reducers/reducers";
import {NgrxStore} from "./ngrx.store.init";
import {EffectsSubscription} from "../../ngrx/effects/effects-subscription";
import {GetUsers} from "../users/user.actions";
import {GetContactsList} from "../contacts/contacts.actions";
import {ContactsEffects} from "../contacts/contacts.effects";
import {UserEffects} from "../users/user.effects";
import {EmailsEffects} from "../emails/emails.effects";
import {LoadEmail} from "../emails/emails.actions";
import {LoadPhone} from "../phones/phones.actions";
import {LoadWebsite} from "../websites/websites.actions";
import {LoadRelations} from "../relations/relations.actions";
import {LoadOntology} from "../ontologies/ontologies.actions";
import {OntologyEffects} from "../ontologies/ontology.effects";
import {PhonesEffects} from "../phones/phones.effects";
import {WebsitesEffects} from "../websites/websites.effects";
import {RelationsEffects} from "../relations/relations.effects";




@Shared()
@Component()
export class StoreService implements OnModuleInit {
    
    constructor(
                private ar: AppReducers,
                private store: NgrxStore,
                private effectssub: EffectsSubscription,
                private contacteffects: ContactsEffects,
                private usereffects: UserEffects,
                private emaileffects: EmailsEffects,
                private ontologyeffects: OntologyEffects,
                private phoneeffects: PhonesEffects,
                private websiteeffects: WebsitesEffects,
                private relationeffects: RelationsEffects,
    ) {}
    
    onModuleInit() {
        console.log('StoreService init');
        this.store.createStore(
            this.ar.appreducers,
        );
        
        this.effectssub.addEffects([
            this.contacteffects,
            this.usereffects,
            this.emaileffects,
            this.ontologyeffects,
            this.phoneeffects,
            this.websiteeffects,
            this.relationeffects,
            
        ]);
        
        this.store.Store.dispatch(new GetUsers());
        this.store.Store.dispatch(new GetContactsList());
        this.store.Store.dispatch(new LoadEmail());
        this.store.Store.dispatch(new LoadPhone());
        this.store.Store.dispatch(new LoadWebsite);
        this.store.Store.dispatch(new LoadRelations());
        this.store.Store.dispatch(new LoadOntology());
    }
}