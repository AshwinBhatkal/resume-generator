import "./App.scss";
import Content from "./components/content";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <div className="page-one">
        <Header />
        <Content page={"pageOne"} />
      </div>
      <div className="page-two">
        <Content page={"pageTwo"} />
      </div>
    </div>
  );
}

export default App;
