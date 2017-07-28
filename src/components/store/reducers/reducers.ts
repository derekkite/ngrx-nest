import {Component} from "@nestjs/common";
import {UserReducer} from "../../users/user.reducer";
import {OnModuleInit} from "@nestjs/common/interfaces/modules";
import {ContactsReducer} from "../../contacts/contacts.reducer";
import {EmailsReducer} from "../../emails/emails.reducer";
import {PhonesReducer} from "../../phones/phones.reducer";
import {WebsitesReducer} from "../../websites/websites.reducer";
import {OntologyReducer} from "../../ontologies/ontologies.reducer";
import {RelationsReducer} from "../../relations/relations.reducer";


@Component()
export class AppReducers implements OnModuleInit{
    appreducers;
    
    constructor(
        private userReducer: UserReducer,
        private contactsReducer: ContactsReducer,
        private emailReducer: EmailsReducer,
        private phoneReducer: PhonesReducer,
        private websiteReducer: WebsitesReducer,
        private ontologyReducer: OntologyReducer,
        private relationReducer: RelationsReducer
    ) {}
    
    onModuleInit() {
        this.appreducers = {
            users: this.userReducer.reducer,
            contacts: this.contactsReducer.reducer,
            emails: this.emailReducer.reducer,
            phones: this.phoneReducer.reducer,
            websites: this.websiteReducer.reducer,
            ontology: this.ontologyReducer.reducer,
            relations: this.relationReducer.reducer,
        }
    }
}
