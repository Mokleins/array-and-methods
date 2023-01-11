import { React, useState } from "react";

function UnshiftAndPush() {
  const [unshift, setUnshift] = useState("");
  const [push, setPush] = useState("");
  const family = ["Mariia", "Marina", "Darina", "Yenia", "Xylon"];
  const familytwo = ["Xylon", "Louis", "Efrain", "Monica"];
  family.push("Un nuevo elemento");
  console.log(family);
  

  return (
    <>
      <button>Unshift</button>
      <input type="text" id="unshift" value={unshift} onChange={e => setUnshift(e.target.value)}></input>
      {family.map((x, i) => {
        return (
          <p>
            index = {i}: {x}{""}
          </p>
        );
      })}
      <button>Push</button>
      <input type="text" id="push" value={push} onChange={e => setPush(e.target.value)}></input>
      <p>Another Family Array</p>
      {familytwo.map((x, i) => {
        return (
          <p>
            index = {i}: {x}
          </p>
        );
      })}
      <p>
        When the developer decides to use the method push, it will add elements
        to the end of the array. There is another method that is called
        unshift() which adds to the begging of an Array.
      </p>
      <p>
        for example if the user decided to use push element to the family array
        it will look like this
      </p>

      <p> Este nuevo elemento fue agreago con el array</p>
    </>
  );
}

export default UnshiftAndPush;
