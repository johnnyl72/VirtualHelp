import {ApiAiClient} from 'api-ai-javascript'
import {applyMiddleware, createStore} from 'redux'

const accessToken = '89323893eb0c4243ab337d6aa2f09ea7'
const client = new ApiAiClient({accessToken})
const ON_MESSAGE = 'ON_MESSAGE'; //generic event

export const sendMessage = (text, sender='user') => ({
  type: ON_MESSAGE,
  payload: {text, sender}
});

const messageMiddleware = () => next => action => {
  next(action);

  if(action.type === ON_MESSAGE){
    const { text } = action.payload;
    client.textRequest(text)
    .then(onSuccess)

    function onSuccess(response){
      const {result: {fulfillment}} = response;
      next(sendMessage(fulfillment.speech, 'bot'));
    }
  }
};

const initState = [{text: 'Hey, I need help!'}];
//Reducer
const messageReducer = (state = [], action) => {
  switch(action.type){

    case ON_MESSAGE:
      return [...state, action.payload];

    default:
      return state;

  }
};

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))
