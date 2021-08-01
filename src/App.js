import Stores from "./Pages/Stores/Stores";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Company from "./Pages/Company/Company";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <h1 style={{ color: "#fff" }}>JM Cleaner</h1>
            <nav className="d-flex gap-3">
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/home"
              >
                Inicio
              </Link>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/products"
              >
                Productos
              </Link>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/stores"
              >
                Tiendas
              </Link>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/company"
              >
                Compañía
              </Link>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/contact"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
        <main className="container" style={{}}>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="**">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
