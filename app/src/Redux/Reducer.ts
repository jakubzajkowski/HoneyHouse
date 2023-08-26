import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { initialState } from './state';


function counterReducer(state = initialState, action:{type:string,payload:any}) {
  switch (action.type) {
    case 'TEST_THUNK':
      return { ...state, data: action.payload }
    default:
      return state
  }
}


const store = createStore(counterReducer,applyMiddleware(thunk))

export default store