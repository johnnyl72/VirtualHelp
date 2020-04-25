import {ApiAiClient} from 'api-ai-javascript'
import {applyMiddleware, createStore} from 'redux'

const accessToken = '89323893eb0c4243ab337d6aa2f09ea7'
const client = new ApiAiClient({accessToken})
const ON_MESSAGE = 'ON_MESSAGE'; //generic event

//Action
export const sendMessage = (text, sender='You') => ({
  type: ON_MESSAGE,
  payload: {text, sender}
});
// A middleware is used so that the two APIs can speak as they cannot speak directly to one another
const messageMiddleware = () => next => action => {
  //Use next to forward to the redducer instead of using dispatch so it won't keep triggering middleWare
  next(action);

  if(action.type === ON_MESSAGE){
    const { text } = action.payload;
    client.textRequest(text)
    .then(onSuccess)

    function onSuccess(response){
      //Abstract reply from JSON
      const {result: {fulfillment}} = response;
      //fullfillment.speech is the 'text'
      next(sendMessage(fulfillment.speech, 'Arnold'));
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
