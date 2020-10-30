import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <div className="container navbar">
        <div className="col-lg-12 navbar"> N A V B A R</div>
      </div>
      <div className="container">
        <div className="row content">
          <div className="col-lg-3 sidebar">
            <Sidebar />
          </div>
          <div className="col-lg-9 test_box2">main</div>
        </div>
      </div>
    </div>
  );
}

export default App;
