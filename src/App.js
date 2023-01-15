import Push from "./components/Push";
import Slice from "./components/Slice";
import Unshift from "./components/Unshift";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
      <div className="cards">
      <Push />
      <Unshift />
      <Slice />
      </div>
      </header>
    </div>
  );
}

export default App;
