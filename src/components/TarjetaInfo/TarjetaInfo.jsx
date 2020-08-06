import React from "react";
import "./TarjetaInfo.css";

export default function TarjetaInfo({ pokemon }) {
  return (
    <div className="TarjetaInfo">
      <div>{pokemon.name}</div>
      <div>id: {pokemon.id}</div>
      <div>
        tipos:
        {pokemon.types.map(function (type) {
          console.log(type.type.name);
          return <p>{type.type.name}</p>;
        })}
      </div>
    </div>
  );
}
