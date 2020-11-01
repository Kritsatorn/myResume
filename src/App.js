import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillPage from "./pages/SkillPage/SkillPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import { AnimatePresence } from "framer-motion";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="box">
      <Navbar />
      <div className="col-sm-12 col-md-8 box2">
        {/* <AnimatePresence exitBeforeEnter> */}
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/skill" component={SkillPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/blog" component={BlogPage} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}

export default App;
