import { React, useState, useEffect } from "react";

function UnshiftAndPush() {
  const [unshift, setUnshift] = useState("");
  const [push, setPush] = useState("");
  const [family, setFamily] = useState([]);
  const [familyTwo, setFamilyTwo] = useState([]);

  // family.push("Un nuevo elemento");

  useEffect(() => {
    return () => {
      setFamily(["Mariia", "Marina", "Darina", "Yenia"]);
      setFamilyTwo(["Xylon", "Louis", "Efrain", "Monica"]);
    };
  }, []);

  function handleUnshiftSubmit(e) {
    e.preventDefault();
    family.unshift(unshift);
    setFamily(family);
    setUnshift("");
  }

  function handlePushSubmit(e) {
    e.preventDefault();
    familyTwo.push(push);
    setFamilyTwo(familyTwo);
    setPush("");
  }
  return (
    <>
      <div className="cards">
        <div className="card">
          <h3>.unshift()</h3>
          <p>It adds elements to the beginning of the array</p>
          <h3>.shift()</h3>
          <p>It removes the first element in an Array</p>
          <form>
            <button>Shift</button>
          </form>
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
        </div>
        <div className="card">
          <h3>.push()</h3>
          <p>It adds elements to the end of the array</p>
          <h3>.pop()</h3>
          <p>It removes the last element in an Array</p>
          
          <form>
            <button>Pop</button>
          </form>
          <form onSubmit={handlePushSubmit}>
            <button>Push</button>
            <input
              type="text"
              id="push"
              value={push}
              onChange={(e) => setPush(e.target.value)}
            ></input>
          </form>
          {familyTwo.map((x, i) => {
            return (
              <p>
                index = {i}: {x}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UnshiftAndPush;
