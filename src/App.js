function App() {
  
  const family = ['Mariia', 'Marina', 'Darina', 'Yenia', 'Xylon'];
  const familytwo = ['Xylon', 'Louis', 'Efrain', 'Monica'];
  family.push('Un nuevo elemento');
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
      {
        <p>When the developer decides to use the method push, it will add elements to the end 
          of the array. There is another method that is called unshift() which adds to the 
          begging of an Array.
          <p>for example if the user decided to use push element to the family array it will look like this</p> 
          <p> Este nuevo elemento fue agreago con el array.</p>
        </p>
        
      }
      {

      }
      </header>
    </div>
  );
}

export default App;
