import { createStore } from 'redux';
import { animesReducer } from './reducers/animes'

export const store = createStore(animesReducer);