import "./App.css";
import Header from "./Components/Header/Header";
import RecommendedVideo from "./Components/RecommendedVideo/RecommendedVideo";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    //* BEM class naming convention
    <div className="App">
      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
