import { React, useState, useEffect } from "react";

function UnshiftAndPush() {
  const [unshift, setUnshift] = useState("");
  const [push, setPush] = useState("");
  const [family, setFamily] = useState([]);
  const [familyTwo, setFamilyTwo] = useState([]);

  // family.push("Un nuevo elemento");

  useEffect(() => {
    return () => {
      setFamily(["Mariia", "Marina", "Darina", "Yenia", "Xylon"]);
      setFamilyTwo(["Xylon", "Louis", "Efrain", "Monica"]);
    };
  }, []);

  function handleUnshiftSubmit(e) {
    e.preventDefault();
    family.unshift(unshift);
    setFamily(family);
    setUnshift("");
  }

  function handlePushSubmit(e){
    e.preventDefault();
    familyTwo.push(push);
    setFamilyTwo(familyTwo);
    setPush("");
  }
  return (
    <>
      <form onSubmit={handleUnshiftSubmit}>
        <button>Unshift</button>
        <input
          type="text"
          id="unshift"
          value={unshift}
          onChange={(e) => setUnshift(e.target.value)}
        ></input>
      </form>
      {family.map((x, i) => {
        return (
          <p key={i}>
            index = {i}: {x}
            {""}
          </p>
        );
      })}
      <form onSubmit={handlePushSubmit}>
        <button>Push</button>
        <input
          type="text"
          id="push"
          value={push}
          onChange={(e) => setPush(e.target.value)}
        ></input>
      </form>
      <p>Another Family Array</p>
      {familyTwo.map((x, i) => {
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
