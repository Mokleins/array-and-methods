import { React, useState, useEffect } from "react";

function UnshiftAndPush() {
  const [unshift, setUnshift] = useState("");
  const [push, setPush] = useState("");
  const [family, setFamily] = useState([]);
  const [familyTwo, setFamilyTwo] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isError1, setIsError1] = useState(false);

  useEffect(() => {
    return () => {
      setFamily(["Mariia", "Marina", "Darina", "Yenia"]);
      setFamilyTwo(["Xylon", "Louis", "Efrain", "Monica"]);
    };
  }, []);

  function handleUnshiftSubmit(e) {
    e.preventDefault();
    if (unshift !== "") {
      family.unshift(unshift);
      setFamily(family);
      setUnshift("");
      setIsError1(false);
    }
    if(unshift === ""){
        setIsError1(true);
    }
  }

  function handlePushSubmit(e) {
    e.preventDefault();
    if (push !== "") {
      familyTwo.push(push);
      setFamilyTwo(familyTwo);
      setPush("");
      setIsError(false);
    }
    if (push === "") {
      setIsError(true);
    }
  }
  return (
    <>
      <div className="cards">
        <div className="card">
          <h3>.unshift()</h3>
          <p>It adds elements to the beginning of the array</p>
          <h3>.shift()</h3>
          <p>It removes the first element in an Array</p>
          <div className="horizontal">
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
            {isError1 ? (
              <p className="error">It can't be an empty string</p>
            ) : (
              <p></p>
            )}
          </div>
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
          <div className="horizontal">
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
            {isError ? (
              <p className="error">It can't be an empty string</p>
            ) : (
              <p></p>
            )}
          </div>
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
