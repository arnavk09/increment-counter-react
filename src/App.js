import "./App.css";
import { Navigation } from "./components/Navigation";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function App() {
  return (
    <>
      <div>
        <Navigation />
        <h1 className="app">Demo App</h1>
        <div className="buttonstuff">
          <div className="incrementButton">
            <Button variant="contained" startIcon={<AddIcon />} >
              Incrementing
            </Button>
          </div>
          <div className="decrement">
            <Button variant="contained" startIcon={<RemoveIcon />}>
              Decrementing
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
