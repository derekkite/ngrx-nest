# ngrx-nest
ngrx/store and ngrx/effects on the server using the nest framework.

src/components/store/store.service.ts shows how to initialize the reducers and effects.

The actions are the same as on the client, as well as the reducers. As is it maintains 
an in memory copy of the lists that you query from the database. I'm using mongodb, but 
any will do. 

Effects do the asynchronous reads and writes to the persistent storage.

The actions are received in the controller, either @Get or @Post.

The post actions are in the body of the request. The get actions are included in the headers.

Both the post and the get actions call a function in the src/components/actions/actions.service.ts. 

They pass the action and res, the response callback.

On a get action, the action is checked for validity, the res appended, and it is dispatched. 
The reducer and effects for that action are run, updating the state.

A function is called, getSelector(action) which returns a selector that extracts the appropriate 
data from the store, subscribes to it, and the response is either an error or the data.

A similar path for the post actions, except the result from the mongo query is returned.

Issues: 

Error handling is not robust or complete.

The subscription will return what is in the store when the selector is called. As is the store
maintains a copy of the data that is required, so it isn't an issue, but it won't work for 
queries that look for the response from the api call. There is some rxjs magic that can make this 
work. Suggestions are welcome. One solution is to use sockets, but that has it's own issues with 
the amounts of data flowing.

The injection of classes is not very tidy. To inject the store ends up being verbose as Store 
is a property of a parent class.

Any suggestions are welcome. This is based on ngrx/store and ngrx/effects v2.x.

The goal is to have one set of actions and reducers shared between the client and the server. 

I have included an email list reducer, effects and the selectors.
