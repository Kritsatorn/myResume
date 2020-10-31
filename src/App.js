import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="box">
      <Navbar />
      <div className="col-sm-12 col-md-8 box2">
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route path="/about">
            <div>ABOUT</div>
          </Route>
          <Route path="/skill">
            <div>SKILL</div>
          </Route>
          <Route path="/project">
            <div>PROJECT</div>
          </Route>
          <Route path="/blog">
            <div>BLOG</div>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
