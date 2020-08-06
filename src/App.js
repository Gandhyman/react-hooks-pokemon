import React, { useState, useEffect } from 'react'
import './App.css'
import Tarjetas from './components/Tarjetas/Tarjetas.jsx'
import Nav from './components/Nav'

import { Route } from 'react-router-dom'
import TarjetaInfo from './components/TarjetaInfo/TarjetaInfo.jsx'
import About from './components/About/About.jsx'

import Login from './components/Login/Login.jsx'

// useState --> sirve paramanejar los estados de la aplicacion
// useEffect --> efectos secundarios. Cuando se cambia un estado o se monta el componente, ejecuta esto
// useCallback ---> te guardas en memoria una funcion hecha. Sirve cuando tenés una funcion con mucha complejidad
// useMemo --> hace lo mismo  a useCallback pero tiene otra sintaxis
// useRef--> te permite guardar estados entre renderizaciones
// useContext--> maneja el context api modo oscuro
// useReducer ---> un reducer con los componentes suscriptos
// customHooks --> pueden crear sus propios hooks

//useSelector -->'react-redux'; te trae un elemento del store
//useDispatch---> react-redux te permite despachar al store

export default function App() {
  //useState es una funcion que retorna un array con dos valores
  //[el primer valor es el estado, y el segundo valor es la funcion para cambiar el estado]
  const [pokemons, setPokemons] = useState([])
  //https://pokeapi.co/api/v2/pokemon/ditto

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(function (resultado) {
  //       return resultado.json()
  //     })
  //     .then(function (resultadoParseado) {
  //       console.log(resultadoParseado)
  //       setPokemons([...pokemons, resultadoParseado])
  //     })
  // }, [])

  function raul() {
    alert('RAUL!')
  }

  async function getPokemon(name) {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + name).then(result => result.json())
    setPokemons([...pokemons, pokemon])
    //Acá seteamos el estado, cada vez que se renueve el estado, se vuelve a renderizar la cantidad de pokemons.
  }

  //  useEffect(una funcion(callback), y un array con los nombres de los estados que cuando cambien, se vuelve a ejecutar )
  useEffect(() => {
    getPokemon('charmander')
  }, [])
  //acá le estamos pasando un estado en el segundo array, entonces se va a volver a ejecutar
  useEffect(() => {
    raul()
  }, [pokemons])
  //¿cuantas veces se va a ejecutar el useEffect este?
  //Una cuando inicie la aplicacion(defino pokemons como vacio), una cuando haga el primer useEffect(charmander)
  //y despues cada vez que busquemos un pokemon

  //Acá definimos una funcion que vamos a pasar como prop a otro componente
  //la idea es siempre manejar el estado desde el componente padre para los componentes hijos
  //recuerden el one way data flow. Los componentes padres pasan estados, los componentes hijos eventos
  //entonces, App le va a pasar el metodo onSearch a la Nav, y la nav, cuando se ejecute le va a avisar
  //che, mira que se ejecuto onSearch, y App va a cambiar el estado y va a renderizar el los nuevos pokemons
  //pero Nav nunca se entera que es lo que paso en App. El estado de Nav es independiente al estado de App.
  function onSearch(pokemon) {
    getPokemon(pokemon)
  }
  /*Para pasar props en un componente funcional de react, a diferencia de clases, no hace falta
usar el this, simplemente para pasar el estado, usamos la variable pokemons, que es la que desestructuramos
en el useState, entonces para acceder a ese valor podemos, desde tarjetas, usar props.pokemons para acceder.
Recordemos que estos nombres son arbitrarios, podrian ser cualquier otro nombre y funcionaria
dela misma manera. Ejemplo: si yo pongo bichito = {pokemons}, en Tarjetas seria props.bichito y tendria
pokemons adentro, vamos al componente Tarjetas para ver como se importan esas props!*/
  return (
    <div>
      <Nav onSearch={onSearch} />
      <Route exact path="/" component={() => <Tarjetas pokemons={pokemons} />} />
      <Route
        exact
        path="/pokemon/:id"
        render={({ match }) => (
          <TarjetaInfo pokemon={pokemons.find(pokemon => pokemon.id === parseInt(match.params.id))} />
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  )
}
