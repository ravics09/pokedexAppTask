import { createStore } from 'redux';
import * as types from '../actions/types.action';

const INITIAL_STATE = {
    pokemonList: []
};

const PokemonReducer = (state = INITIAL_STATE, action) => {
    console.log("type of action payload called", action);
    switch (action.type) {
        case types.ADD_POKEMON: {
            const newItem = [...(state.pokemonList)];
            newItem.push(action.payload);
            return {
                ...state,
                pokemonList: [...new Set(newItem)]
            }
        }

        case types.REMOVE_POKEMON: {
            const removeList = [...(state.pokemonList)];
            const i = removeList.indexOf(action.payload);
            console.log("index of item to remove",i);
            removeList.splice(i, 1);
            return {
                ...state,
                pokemonList: [...new Set(removeList)]
            };
        }
        default: return state;
    }
}

export default PokemonReducer;