import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Rooms from "./Components/Rooms";
import SingleRoom from "./Components/SingleRoom";
import DinamicRoom from "./Components/DinamicRoom";
import DinamicDeluxe from "./DinamicDeluxe";
import { Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/Rooms" element={<Rooms/>} />
          <Route  path="/SingleRoom" element={<SingleRoom/>} />
          <Route  path='/DinamicRoom/:id' element={<DinamicRoom/>} />
          <Route  path='/DinamicDeluxe/:deluxeid' element={<DinamicDeluxe/>} />
        </Routes>
      </div>
  );
}

export default App;
