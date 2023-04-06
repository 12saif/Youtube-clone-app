import Header from "./Components/Header/Header";
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    //* BEM class naming convention
    <div className="App">
      {/* <h1>Hello Saif Programmer, let's build a YouTube Clone App 💯 </h1> */}

      {/* Header */}
      <Header />
      {/* Sidebar */}
      <Sidebar/>
      {/* RecommendedVideo */}
    </div>
  );
}

export default App;
