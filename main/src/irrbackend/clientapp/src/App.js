import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import ClientRoutes from "./utils/ClientRoutes"
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <Routes>
          {ClientRoutes.map((route, index) => {
              const { page, requireAuth, ...rest } = route;
              return <Route key={index} {...rest} element={ requireAuth ? <AuthorizeRoute {...rest} element={page} /> : page} />
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
