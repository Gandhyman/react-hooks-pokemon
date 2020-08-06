import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta.jsx'

import './Tarjetas.css'
//tarjetas recibe unas props, las cuales tiene pokemons adentro. Para usarlas solo hacemos props.Pokemons
//y listo. Adentro esta lo que le enviamos desde App

export default function Tarjetas(props) {
  return (
    <div className="Tarjetas">
      {props.pokemons.map((pokemon, index) => {
        return <Tarjeta pokemon={pokemon} key={index} />
      })}
    </div>
  )
}
