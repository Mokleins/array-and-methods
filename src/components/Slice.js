import { React, useEffect, useState } from "react";

function Slice() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [array, setArray] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    return () => {
      setArray(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    };
  }, []);

  function handleSlice(e) {
    e.preventDefault();
    if (first && second) {
      let newArr = array.slice(parseInt(first), parseInt(second));
      setArray(newArr);
    }
    if (first && !second) {
      let newArr = array.slice(parseInt(first));
      setArray(newArr);
    }
    if (!first && second) {
      setErrors("noFirstArgument");
    }
  }

  return (
    <>
      <div className="card">
        <h3>.slice()</h3>
        <p>
          it can take 2 arguments: the first is the index where the slice should
          begin and the second is the index before which it should end
        </p>
        <div className="horizontal">
          <form onSubmit={handleSlice}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Slice
            </button>
            <input
              type="text"
              id="first"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            ></input>
            <input
              type="text"
              id="second"
              value={second}
              onChange={(e) => setSecond(e.target.value)}
            ></input>
          </form>
        </div>
        <div>
          {array.map((x, i) => {
            return (
              <p key={i}>
                index = {i}: {x}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slice;
