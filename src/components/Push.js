import { React, useState, useEffect } from "react";

function Push() {
  const [push, setPush] = useState("");
  const [familyTwo, setFamilyTwo] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    return () => {
      setFamilyTwo(["Xylon", "Louis", "Efrain", "Monica"]);
    };
  }, []);

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

  function handlePopSubmit(e) {
    e.preventDefault();
    familyTwo.pop();
    setFamilyTwo((familyTwo) => familyTwo.filter((member) => member !== ""));
  }

  return (
    <>
        <div className="card">
          <h3>.push()</h3>
          <p>It adds elements to the end of the array</p>
          <h3>.pop()</h3>
          <p>It removes the last element in an Array</p>
          <div className="horizontal">
            <form onSubmit={handlePopSubmit}>
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
              <p key={i}>
                index = {i}: {x}
              </p>
            );
          })}
        </div>
    </>
  );
}

export default Push;
