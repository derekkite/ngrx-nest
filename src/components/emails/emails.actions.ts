import {Email} from "../../../../angularcli/triggers/src/app/models/contacts.model";
import {Action} from "../../ngrx/store/dispatcher";
import {type} from "../utils/util";



export const emailListTypes = {
    ADD_EMAIL: type('[EmailList] Add'),
    UPDATE_EMAIL: type('[EmailList] Update'),
    LOAD_EMAILS: type('[EmailList] Load'),
    LOAD_EMAILS_COMPLETE: type('[EmailList] Load Complete')
};

export class AddEmail implements Action {
    type = emailListTypes.ADD_EMAIL;
    constructor(public payload: Email) {}
}

export class UpdateEmail implements Action {
    type= emailListTypes.UPDATE_EMAIL;
    constructor(public payload: Email) {}
}

export class LoadEmail implements Action {
    type= emailListTypes.LOAD_EMAILS;
    constructor(public payload?) {}
}

export class LoadEmailComplete implements Action {
    type= emailListTypes.LOAD_EMAILS_COMPLETE;
    constructor(public payload: Email[]) {}
}

export type Actions
    = AddEmail
    | UpdateEmail
    | LoadEmail
    | LoadEmailComplete;


