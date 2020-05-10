import { createStore, combineReducers} from 'redux';
import PokemonReducer from './reducers/pokemonReducer';

const RootReducer = combineReducers({
    PokemonReducer
});

export const store = createStore(RootReducer);
