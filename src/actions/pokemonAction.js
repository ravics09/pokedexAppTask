import * as types from './types.action';

export const addPokemon = (pokemon) => {
    console.log('addPokemon action called to add pokemon',pokemon);
    return {
        type: types.ADD_POKEMON,
        payload: pokemon
    }
}

export const removePokemon = (pokemon) => {
    return {
        type: types.REMOVE_POKEMON,
        payload: pokemon
    }
} 