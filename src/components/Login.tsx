import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/features/authSlice";
import { authReqModel } from "../models/authReqModel";
import { useAppDispatch, useAppSelector } from "../hooks";
import { unwrapResult } from "@reduxjs/toolkit";
import { setUsuario } from "../redux/features/userSlice";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.autenticacion);
  useEffect(() => {
    console.log(error);
    
  }, [error])
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try{
        // Simula autenticación
        const respAction = await dispatch(
          loginUser({
            username,
            passw: password,
          })
        )
        const user = unwrapResult(respAction);
        dispatch(setUsuario({
            nombre:user.userName,
            correo:user.email,
            autorizado: true
        }))
        navigate("/panel");
    }catch(err){
        console.error(err);
    }
  };

  return (
    <div>
      {/* <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Ingresar
        </button>
      </form>
      {
        error && 
        <p style={{color:"red"}}>{error}</p>
      } */}
      <LoginForm />
    </div>
  );
};
