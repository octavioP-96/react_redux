import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }:ProtectedRouteProps)  => {
    const user = useSelector((state:RootState) => state.usuario)
    const isAuthenticated = user.autorizado;

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }
  
    return (
        <>{children}</>
    );
}