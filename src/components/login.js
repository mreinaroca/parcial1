import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";


export default function Login() {

  const [loginValues, setLoginValues] = useState({login: "", password: ""});
  const [loginState, setLoginState] = useState (true);
  const [loginColor, setLoginColor] = React.useState("form-control");


  const handleLoginChange = ((e) => {
    setLoginValues({...loginValues, login:e.target.value});
  })

  const handlePasswordChange = ((e) => {
    setLoginValues({...loginValues, password:e.target.value});
  })

  const validateLogin = () => {
    let login = loginValues.login;
    let password = loginValues.password;
    let isValid = true;
    setLoginColor(isValid ? "form-control": "form-control is-invalid")
    setLoginState(isValid)
  }
  const submitLogin = (() => {
    validateLogin()
  })

  const cancelarLogin = (() => {

  })

  return (
    <div>
      <img
        src="https://i.postimg.cc/BZ55BVVK/cabeza.jpg"
        alt="https://postimg.cc/K4zgZJFG" 
      />
      <hr></hr>
      <h3>Inicio de sesión</h3>
      <Form>
        <Form.Group className="mb-6" controlId="loginLogin">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="login"
            className={loginColor}
            onChange={handleLoginChange}
            value={loginValues.login}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="loginPassowrd">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="login"
            className={loginColor}
            onChange={handlePasswordChange}
            value={loginValues.password}
          />
          {
            !loginState && 
            <Form.Text className="text-danger">
              Error de autenticación. Revise sus credenciales
            </Form.Text>
          }
        </Form.Group>
      </Form>

      <Button variant ="primary" onClick={submitLogin}>
        Ingresar
      </Button>

      <Button variant ="danger" onClick={cancelarLogin}>
        Cancelar
      </Button>

    </div>
  );

}


