import Push from "./components/Push";
import Slice from "./components/Slice";
import Unshift from "./components/Unshift";
import Splice from "./components/Splice";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
      <div className="cards">
      <Push />
      <Unshift />
      <Slice />
      <Splice />
      </div>
      </header>
    </div>
  );
}

export default App;
