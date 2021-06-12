import "./App.css";
import NavBar from "./Components/NavBar";
import PageContent from "./Components/PageContent";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={PageContent} exact />
      </Router>
    </div>
  );
}

export default App;
