import React, { useState } from "react";
import "./Login.css";

import { regNombre, regTelefono, regMail } from "./Regex.js";

export function validate(inputs) {
  let errors = {};
  if (!inputs.mail) {
    errors.mail = "mail is required";
  } else if (!regMail.test(inputs.mail)) {
    errors.mail = "mail is invalid";
  }

  if (!inputs.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(inputs.password)) {
    errors.password = "Password is invalid";
  }

  if (!inputs.name) {
    errors.name = "El nombre es requerido";
  } else if (!regNombre.test(inputs.name)) {
    errors.name = "El nombre es inválido";
  }
  return errors; // {mail: "mail is required", password: "password is invalid"}
}

export default function Login() {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
    name: "",
  });
  const handleInputChange = function (event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setErrors(
      validate({
        ...inputs, //{mail:"a", password: "123"}
        [event.target.name]: event.target.value,
      })
    );
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="Login">
      <form>
        <div>
          <input
            id="mail"
            type="text"
            name="mail"
            placeholder="Email"
            value={inputs.mail}
            onChange={handleInputChange}
          />
          {errors.mail && <p className="danger">{errors.mail}</p>}
        </div>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            value={inputs.password}
            placeholder="Contraseña"
            onChange={handleInputChange}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            placeholder="Nombre"
            onChange={handleInputChange}
          />
          {errors.name && <p className="danger">{errors.name}</p>}
        </div>
      </form>
    </div>
  );
}
