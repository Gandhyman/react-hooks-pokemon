import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
//Esta es otra forma de usar las props!
//Si nosotros sabemos que props es un objeto, podemos desestructurar y obtener los valores directamente
//Entonces, onSearch lo podemos usar directamente. Es lo mismo a haber tenido props en los parametros
//y despues haber usado props.onSearch()
export default function Nav({ onSearch }) {
  const [busqueda, setBusqueda] = useState('')
  return (
    <nav className="Nav">
      <NavLink exact to="/" activeClassName="active">
        Inicio
      </NavLink>
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink exact to="/login" activeClassName="active">
        Login
      </NavLink>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSearch(busqueda)
        }}
      >
        <input
          id="input"
          type="text"
          placeholder="Pokemon..."
          value={busqueda}
          onChange={e => {
            setBusqueda(e.target.value)
          }}
        />
        <input type="submit" value="Agregar" />
      </form>
    </nav>
  )
}
