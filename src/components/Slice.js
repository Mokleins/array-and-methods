import {React, useEffect, useState} from "react";

function Slice () {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [array, setArray] = useState([]);

    useEffect(() => {
        return() => {
            setArray(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
        };
    }, []);

    console.log(array)

    return (
      <>
        <div className="cards">
          <div className="card">
            <h3>.slice()</h3>
            <p>it can take 2 arguments: the first is the index where the slice should begin and the second is the index before which it should end</p>
            <div>
                {array.map((x, i) => {
                    return(
                        <p key={i}>
                            index = {i}: {x}
                        </p>
                    )
                })}
            </div>
          </div>
        </div>
      </>
    );

}

export default Slice;