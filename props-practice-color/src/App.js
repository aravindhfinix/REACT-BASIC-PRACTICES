import { useState } from 'react';
import './App.css';
import Color from './Color';
import Input from './Input';

function App() {
  const [colors, setColor] = useState('Empty string')
  const [status,setStatus]= useState(true)

  return (
    <div className="App">
      <Color
       colors={colors}
       status={status}
       /><br />
      <Input
       setColor={setColor}
       status={status}
       setStatus={setStatus}
      />
    </div>
  );
}

export default App;
