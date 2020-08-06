import {
  ADD_POKEMON,
  REMOVE_POKEMON,
  GET_POKEMON_DETAIL,
} from "../actions/pokemonsActions.js";

const initialState = {
  pokemons: [], // un pokemon es un objeto {id: 134, name: "Ditto", abilities:[]}
  pokemon_detail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      console.log(action.payload.name);
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
      };
    case REMOVE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map(
          (pokemon) => pokemon.name !== action.payload.name
        ),
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemon_detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
