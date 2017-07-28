import {Component, Shared} from "@nestjs/common";
import {Observable} from "rxjs/Observable";
import {UserTypes} from "../../users/user.actions";
import {UserSelectors} from "../../users/user.selector";
import {Action} from "../../../ngrx/store/dispatcher";
import {contactListTypes} from "../../contacts/contacts.actions";
import {ContactsSelectors} from "../../contacts/contacts.selector";
import {emailListTypes} from "../../emails/emails.actions";
import {EmailsSelectors} from "../../emails/emails.selector";
import {phoneListTypes} from "../../phones/phones.actions";
import {PhonesSelectors} from "../../phones/phones.selector";
import {websiteListTypes} from "../../websites/websites.actions";
import {WebsiteSelectors} from "../../websites/websites.selector";
import {ontologyTypes} from "../../ontologies/ontologies.actions";
import {OntologySelectors} from "../../ontologies/ontologies.selector";
import {relationsTypes} from "../../relations/relations.actions";
import {RelationsSelectors} from "../../relations/relations.selector";


@Shared()
@Component()
export class Selectors {
    constructor(
                private users: UserSelectors,
                private contacts: ContactsSelectors,
                private emails: EmailsSelectors,
                private phones: PhonesSelectors,
                private websites: WebsiteSelectors,
                private ontologies: OntologySelectors,
                private relations: RelationsSelectors
    ) {}
    
    getSelector(action: Action): Observable<any> {
        // console.log('getSelector', action['type']);
        switch (action.type) {
            case UserTypes.GET_USERS:
                return this.users.getList();
                
            case UserTypes.LOGIN:
                return this.users.getUserObj(action['payload']['user']);
                
            case contactListTypes.GET_LIST:
                return this.contacts.getContactsObj();

            case emailListTypes.LOAD_EMAILS:
                return this.emails.getEmailsObj();

            case phoneListTypes.LOAD_PHONES:
                return this.phones.getPhonesObj();

            case websiteListTypes.LOAD_WEBSITES:
                return this.websites.getWebsitesObj();

            case ontologyTypes.LOAD:
                return this.ontologies.getOntologyObj();

            case relationsTypes.LOAD_RELATIONS:
                return this.relations.getRelationsObj();
                
            default: console.log('no recognized type', action['type']);
            return Observable.empty();
            
        }
    }
}
