import React from "react";
import "./Tarjeta.css";

import { Link } from "react-router-dom";

export default function Tarjeta({ pokemon }) {
  return (
    <div className="Tarjeta">
      <button className="btn btn-primary myButton">X</button>
      <Link to={"/pokemon/" + pokemon.id}>{pokemon.name}</Link>
      <div>id: {pokemon.id}</div>
    </div>
  );
}
