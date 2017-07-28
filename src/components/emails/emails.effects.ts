import {Component, HttpStatus} from "@nestjs/common";
import {Actions} from "../../ngrx/effects/actions";

import {Effect} from "../../ngrx/effects/effects";

import {EmailsGetService} from "./emails.get.service";
import {emailListTypes, LoadEmailComplete} from "./emails.actions";
import {EmailsPostService} from "./emails.post.service";
import {Observable} from "rxjs/Observable";


@Component()
export class EmailsEffects {
    
    constructor(
        private action$: Actions,
        private emailsget: EmailsGetService,
        private emailspost: EmailsPostService
    ) {}
    
    
    @Effect() loadcontacts = this.action$
        .ofType(emailListTypes.LOAD_EMAILS)
        .map(action => action.payload)
        .concatMap(payload => this.emailsget.getEmailList({}, {})
            .map(result => new LoadEmailComplete(result)));
    
    @Effect({dispatch: false}) insertemail = this.action$
        .ofType(emailListTypes.UPDATE_EMAIL, emailListTypes.ADD_EMAIL)
        .concatMap(action => this.emailspost.updateEmail({}, action.payload)
            .do(res => {
                // console.log('updateemail effect', res);
                action.sub.next(res);
                action.sub.complete();
            })
            .catch(err => {
                console.log('updateemail effect error', err);
                action.sub.error(err);
                action.res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
                return Observable.empty();
            }));
    
    
}

