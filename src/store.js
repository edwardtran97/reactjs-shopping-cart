import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import productSlide from "./redux-slide/productSlide";
import cartSlide from "./redux-slide/cartSlide";




const reducer = combineReducers({
    product: productSlide.reducer,
    cart : cartSlide.reducer,
  });


const stateFromStorage = JSON.parse(localStorage.getItem('redux_store')) || {};
const middleware = applyMiddleware(thunk);

const store = createStore(reducer, stateFromStorage ,middleware );

// store.subscribe(() => {
//   console.log('Store update: ', store.getState());
//   const newState = store.getState();
//   localStorage.setItem('redux_store', JSON.stringify(newState))
// });

export default store;