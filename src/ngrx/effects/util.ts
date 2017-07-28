import { Action } from '../store/dispatcher';


export function toPayload(action: Action) {
  return action.payload;
}
