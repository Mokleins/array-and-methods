function App() {
  
  const family = ['Mariia', 'Marina', 'Darina', 'Yenia', 'Xylon'];
  
  console.log(family);

  return (
    <div className="App">
      <header className="App-header">
      {family.map((x) => {
        return <p>array = {x}</p>;
      })}
      </header>
    </div>
  );
}

export default App;
