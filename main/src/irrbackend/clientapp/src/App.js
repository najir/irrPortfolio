import './App.css';
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className = "mainBody">
        {ClientRoutes.map((route, index) => {
            const { page, requireAuth, ...rest } = route;
            return <Route key={index} {...rest} page={ requireAuth ? <AuthorizeRoute {...rest} page={page} /> : page} />
        })}
      </div>
    </div>
  );
}

export default App;
