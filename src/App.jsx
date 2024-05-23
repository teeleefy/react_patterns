import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Home from "./Home.jsx"
import Colors from "./Colors.jsx"
import DogList from './DogList.jsx'
import DogDetails from './DogDetails.jsx'
import Color from './Color.jsx'
import dogs from './dogs.js'
import NewColorForm from './NewColorForm.jsx';


import { Route, Routes } from "react-router-dom";
const baseColor = '#f4b8db';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(baseColor);
  
  useEffect(function changeBackgroundColor(){
    let rgb = backgroundColor;
    document.body.style.backgroundColor = rgb;
  },[backgroundColor])

 

  const [colors, setColors] = useState([{name: "magenta", rgb: "#eb0095", id: uuid()}, {name: "yellow", rgb: "#f0ff1a", id: uuid()}, {name: "teal", rgb: "#04c3b6", id: uuid()}])
  
   const addColor = color => {
    let newColor = { ...color, id: uuid()};
    setColors(colors => [...colors, newColor])
}
  
  return (
    <div className="App">
      <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dogs" element={<DogList dogs={dogs}/>}/>
                <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
                <Route path="/colors" element={<Colors colors={colors} setColors={setColors} baseColor={baseColor} setBackgroundColor={setBackgroundColor}/>} />
                <Route path="/colors/:name" element={<Color colors={colors} setBackgroundColor={setBackgroundColor}/>} />
                <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
      </Routes>
    </div>
  );
}



export default App;
