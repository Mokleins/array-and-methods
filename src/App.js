function App() {
  
  const family = ['Mariia', 'Marina', 'Darina', 'Yenia', 'Xylon'];
  const familytwo = ['Xylon', 'Louis', 'Efrain', 'Monica'];
  console.log(family);

  return (
    <div className="App">
      <header className="App-header">
      { 
      family.map((x, i) => {
        return <p>index = {i}: {x} </p>;
      })
      } 
      {<p>Another Family Array</p>}
      {
        familytwo.map((x, i) => {
          return <p>index = {i}: {x}</p>
        })
      }
      </header>
    </div>
  );
}

export default App;
