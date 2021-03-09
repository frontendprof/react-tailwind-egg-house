import {Switch,Route} from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
