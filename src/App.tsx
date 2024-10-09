import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { Login } from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

const Panel = lazy(() => import("./pages/Panel").then(mod => ({default:mod.Panel})))

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
                  <Panel />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
