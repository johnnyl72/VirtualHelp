import {ApiAIClient} from 'api-ai-javascript';
import {createStore, applyMiddleware} from 'redux';

let token = '89323893eb0c4243ab337d6aa2f09ea7'
const client = new ApiAIClient({token})
const MSG_RECIEVE = 'MSG_RECIEVE';

export const sendMsg = (text, sender='user') => ({
  type: MSG_RECIEVE,
  payload: {text, sender}
});

const msgMiddleWare = () => next => action => {
  next(action);

  if(action.type == MSG_RECIEVE){
    const {text} = action.payload;
    client.textRequest(text).then(onSuccess)

    function onSuccess(response){
      const {result: {fulfillment}} =response;
      next(sendMessage(fullfillment.sppech, 'bot'))
    }
  }
};
const initState = [{text: 'Hello'}];
const msgReducer=(state=initState,action)=>{
    switch(action.type){
        case MSG_RECIEVE:
            return  [...state,action.payload]
            default:
                return state;
    }
}

export const store = createStore(msgReducer,msgMiddleWare)
