import {useState} from "react";
function App() {

  const [counter, setCounter] = useState(0);

    function handleIncrease() {
        setCounter(1 + counter);
    }

    function handleDecrease() {
        setCounter(counter - 1);
    }

    return (
    <div>
      <h1 style={{textAlign: "center"}}>THIEN HUYNH DOING CYPRESS TEST</h1>
      <div style={{fontSize: "100px", textAlign: "center", paddingTop: "100px"}}>Current: <span>{counter}</span></div>
      <div style={{display: "flex", justifyContent: "space-evenly", paddingTop: "80px"}}>
        <button
            style={{width: "80px", height: "30px", borderRadius: "10px", backgroundColor: "pink"}}
            onClick={handleIncrease}>
          Increase
        </button>
        <button style={{width: "80px", height: "30px", borderRadius: "10px", backgroundColor: "aliceblue"}}
                onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
