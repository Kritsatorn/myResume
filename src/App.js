import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExpPage from "./pages/ExpPage/ExpPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NavHeader from "./components/NavHeader/NavHeader";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="box">
      {/* desktop */}
      <Navbar />
      <div className="col-12 col-lg-9 box2">
        <NavHeader />

        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skill" component={ExpPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/blog" component={BlogPage} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
