import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export const Panel = () => {
    const user = useSelector((state:RootState) => state.usuario)
  return (
    <div>
      <h1>Bienvenido al Panel</h1>
      <p>Hola {JSON.stringify(user)} Este panel está protegido y cargado dinámicamente.</p>
    </div>
  )
}
