import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  var incrementHandler = () => {
    setCount(count + 1);
    console.log("Increment button clicked. Count is " + count);
  };
  var decrementHandler = () => {
    if (count <= 0) {
      alert("Cannot decrement further. Count is already 0.");
    } else {
      setCount(count - 1);
      console.log("Decrement button clicked. Count is " + count);
    }
  };
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <h1 className="app">Counter App</h1>
        <div className="buttonstuff">
          <div className="incrementButton">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={incrementHandler}>
              Increment
            </Button>
          </div>
          <div className="decrement">
            <Button
              variant="contained"
              startIcon={<RemoveIcon />}
              onClick={decrementHandler}>
              Decrement
            </Button>
          </div>
        </div>
        <h4 className="counter">Count:{count}</h4>
      </div>
    </>
  );
}

export default App;
