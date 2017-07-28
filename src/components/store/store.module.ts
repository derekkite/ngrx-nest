import {Module, Shared} from "@nestjs/common";
import {StoreService} from "./store.service";
import {AppReducers} from "./reducers/reducers";
import {UserReducer} from "../users/user.reducer";
import {UserSelectors} from "../users/user.selector";
import {Selectors} from "./selectors/selectors";
import {ActionsService} from "../actions/actions.service";
import {MongoDb} from "../db/mongo.service";
import {UsersPostService} from "../users/users.post.service";
import {UsersGetService} from "../users/users.get.service";
import {NgrxStore} from "./ngrx.store.init";
import {EffectsSubscription} from "../../ngrx/effects/effects-subscription";
import {Actions} from "../../ngrx/effects/actions";
import {ContactsGetService} from "../contacts/contacts.get.service";
import {ContactsPostService} from "../contacts/contacts.post.service";
import {ContactsSelectors} from "../contacts/contacts.selector";
import {Dispatcher} from "../../ngrx/store/dispatcher";
import {ContactsReducer} from "../contacts/contacts.reducer";
import {PhonesReducer} from "../phones/phones.reducer";
import {EmailsReducer} from "../emails/emails.reducer";
import {WebsitesReducer} from "../websites/websites.reducer";
import {OntologyReducer} from "../ontologies/ontologies.reducer";
import {PhonesSelectors} from "../phones/phones.selector";
import {EmailsSelectors} from "../emails/emails.selector";
import {WebsiteSelectors} from "../websites/websites.selector";
import {OntologySelectors} from "../ontologies/ontologies.selector";
import {PhonesGetService} from "../phones/phones.get.service";
import {PhonesPostService} from "../phones/phones.post.service";
import {EmailsGetService} from "../emails/emails.get.service";
import {EmailsPostService} from "../emails/emails.post.service";
import {WebsiteGetService} from "../websites/websites.get.service";
import {WebsitesPostService} from "../websites/websites.post.service";
import {OntologyGetService} from "../ontologies/ontologies.get.service";
import {OntologyPostService} from "../ontologies/ontologies.post.service";
import {UserEffects} from "../users/user.effects";
import {ContactsEffects} from "../contacts/contacts.effects";
import {EmailsEffects} from "../emails/emails.effects";
import {OntologyEffects} from "../ontologies/ontology.effects";
import {PhonesEffects} from "../phones/phones.effects";
import {WebsitesEffects} from "../websites/websites.effects";
import {RelationsEffects} from "../relations/relations.effects";
import {RelationsGetService} from "../relations/relations.get.service";
import {RelationsPostService} from "../relations/relations.post.service";
import {RelationsReducer} from "../relations/relations.reducer";
import {RelationsSelectors} from "../relations/relations.selector";

@Shared()
@Module({
    components: [
        // store
        Dispatcher,
        NgrxStore,
        AppReducers,
        Selectors,
        ActionsService,
        MongoDb,
        EffectsSubscription,
        Actions,
        StoreService,
    
        // user
        UserReducer,
        UserSelectors,
        UsersGetService,
        UsersPostService,
        UserEffects,
        
        // contacts
        ContactsReducer,
        ContactsSelectors,
        ContactsGetService,
        ContactsPostService,
        ContactsEffects,
        
        // phones
        PhonesReducer,
        PhonesSelectors,
        PhonesGetService,
        PhonesPostService,
        PhonesEffects,
        
        // emails
        EmailsReducer,
        EmailsSelectors,
        EmailsGetService,
        EmailsPostService,
        EmailsEffects,
        
        // websites
        WebsitesReducer,
        WebsiteSelectors,
        WebsiteGetService,
        WebsitesPostService,
        WebsitesEffects,
    
        // relations
        RelationsReducer,
        RelationsSelectors,
        RelationsGetService,
        RelationsPostService,
        RelationsEffects,
        
        // ontologies
        OntologyReducer,
        OntologySelectors,
        OntologyGetService,
        OntologyPostService,
        OntologyEffects,
        
    ],
    exports: [
        // store
        Dispatcher,
        NgrxStore,
        AppReducers,
        Selectors,
        ActionsService,
        MongoDb,
        EffectsSubscription,
        Actions,
        StoreService,
    
        // user
        UserReducer,
        UserSelectors,
        UsersGetService,
        UsersPostService,
        UserEffects,
    
        // contacts
        ContactsReducer,
        ContactsSelectors,
        ContactsGetService,
        ContactsPostService,
        ContactsEffects,
    
        // phones
        PhonesReducer,
        PhonesSelectors,
        PhonesGetService,
        PhonesPostService,
        PhonesEffects,
    
        // emails
        EmailsReducer,
        EmailsSelectors,
        EmailsGetService,
        EmailsPostService,
        EmailsEffects,
    
        // websites
        WebsitesReducer,
        WebsiteSelectors,
        WebsiteGetService,
        WebsitesPostService,
        WebsitesEffects,
    
        // relations
        RelationsReducer,
        RelationsSelectors,
        RelationsGetService,
        RelationsPostService,
        RelationsEffects,
    
        // ontologies
        OntologyReducer,
        OntologySelectors,
        OntologyGetService,
        OntologyPostService,
        OntologyEffects,
    ],
    
    
})

export class StoreModule {}
