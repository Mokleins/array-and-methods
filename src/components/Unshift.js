import { React, useState, useEffect } from "react";

function Unshift() {
  const [unshift, setUnshift] = useState("");
  const [family, setFamily] = useState([]);
  const [isError1, setIsError1] = useState(false);

  useEffect(() => {
    return () => {
      setFamily(["Mariia", "Marina", "Darina", "Yenia"]);
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
    if (unshift === "") {
      setIsError1(true);
    }
  }

  function handleShiftSubmit(e) {
    e.preventDefault();
    family.shift();
    setFamily((family) => family.filter((member) => member !== ""));
  }

  return (
    <div className="card">
      <h3>.unshift()</h3>
      <p>It adds elements to the beginning of the array</p>
      <h3>.shift()</h3>
      <p>It removes the first element in an Array</p>
      <div className="horizontal">
        <form onSubmit={handleShiftSubmit}>
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
          </p>
        );
      })}
    </div>
  );
}

export default Unshift;
