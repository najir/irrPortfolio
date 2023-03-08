import './App.css';
import NavBar from "./components/NavBar"
import { Route, Routes } from 'react-router-dom';
import ClientRoutes from "./utils/ClientRoutes"
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className = "mainBody">
        <Routes>
          {ClientRoutes.map((route, index) => {
              const { page, requireAuth, ...rest } = route;
              return <Route key={index} {...rest} element={ requireAuth ? <AuthorizeRoute {...rest} element={page} /> : page} />
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
