export const ADD_POKEMON = "ADD_POKEMON";
export const REMOVE_POKEMON = "REMOVE_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";

export function addPokemon(name) {
  //   console.log(name);
  return function (dispatch) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((resultado) => resultado.json())
      .then((pokemon) => {
        dispatch({ type: ADD_POKEMON, payload: pokemon });
      });
  };
}

// export function getMovieDetail(payload) {
//   return function (dispatch) {
//     return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + payload.id)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
//       });
//   };
// }
