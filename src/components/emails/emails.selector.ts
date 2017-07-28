import {Component, Shared} from "@nestjs/common";
import {createSelector} from "reselect";
import {NgrxStore} from "../store/ngrx.store.init";


@Shared()
@Component()
export class EmailsSelectors {
    constructor(private s: NgrxStore) {}
    
    getEmails() {
        return this.s.Store.select(emailsList)
    }
    
    getEmailsObj() {
        return this.s.Store.select(emailsListObj)
    }
    
    getEmail(email) {
        return this.s.Store.select(Getemail(email))
        
    }
}

export const emailsList = state => state.emails;

export const emailsListObj = createSelector(emailsList, (list) => {
    return {Email: list}
});

export const Getemail = (email) => createSelector(emailsList, (list) => {
    return list.filter(u => u.tid === email.tid);
});

