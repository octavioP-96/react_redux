import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { Login } from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const Panel = lazy(() => import("./pages/Panel").then(mod => ({default:mod.Panel})))
const theme = createTheme({
  palette: {
    background: {
      default: "#edebff", // Cambia esto al color de fondo que desees
    },
  }
});
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route
              path='/panel'
              element={
                <ProtectedRoute>
                  <Suspense fallback={<div>Cargando panel...</div>}>
                          <ThemeProvider theme={theme}>
                          <CssBaseline/>
                    <Panel />
                          </ThemeProvider>
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
