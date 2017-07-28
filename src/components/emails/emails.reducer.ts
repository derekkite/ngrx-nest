import {Component, Shared} from "@nestjs/common";
import {Action} from "../../ngrx/store/dispatcher";
import {emailListTypes} from "./emails.actions";

@Shared()
@Component()
export class EmailsReducer {
    
    
    public reducer(state = [], action: Action) {
        switch (action.type) {
            
            case emailListTypes.LOAD_EMAILS_COMPLETE: {
                // console.log('loademailscomplete', action.payload);
                return action.payload
            }
            
            case emailListTypes.ADD_EMAIL: {
                let warray = [...state, action.payload];
                return warray
            }
            
            case emailListTypes.UPDATE_EMAIL: {
                let found = false;
                let warray = state.map(w => {
                    if (w.tid === action.payload.tid) {
                        found = true;
                        return Object.assign({}, w, action.payload);
                    } else {
                        return w;
                    }
                });
    
                if (found === false) {
                    warray = [...state, action.payload];
                }
                return warray;
            }
            
            default: {
                return state;
            }
        }
    }
    
    
}
