import { React, useEffect, useState } from "react";

function Splice() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [array, setArray] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    return () => {
      setArray(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    };
  }, []);

  function handleSplice(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="card">
        <h3>.splice()</h3>
        <p>
          It allows to remove elements, add elements, or replace elements (or
          any combination of the three.)
        </p>
        <div className="horizontal">
          <form onSubmit={handleSplice}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Splice
            </button>
            <input
              type="text"
              id="first"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Splice;
