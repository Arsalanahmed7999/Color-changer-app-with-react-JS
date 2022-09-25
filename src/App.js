import { useState } from "react";
import Square from "./Square";
import Input from "./Input";



function App() {
  const [colorValue, setColorValue]=useState('');
  const [hexColor, setHexColor] = useState('');
  const [isDarkColor, setIsDarkColor] = useState(true);
  return (
    <div className="App">
      <Square
      colorValue={colorValue}
      hexColor = {hexColor}
      isDarkColor = {isDarkColor} />
      <Input
      colorValue={colorValue}
      setColorValue={setColorValue}
      setHexColor = {setHexColor}
      isDarkColor = {isDarkColor}
      setIsDarkColor = {setIsDarkColor} />
    </div>
  );
}

export default App;
