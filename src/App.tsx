import React, { useState } from 'react';
import './App.css';
import AbsoluteSlide from './AbsoluteSlide';

function App() {
  const [deneme, setDeneme] = useState<number | undefined>(20)
  const [deneme1, setDeneme1] = useState<number | undefined>(0)
  const [deneme2, setDeneme2] = useState<number | undefined>(-100)
  const [deneme3, setDeneme3] = useState<number | undefined>(undefined)

  return (
    <div className="App">
      <h1>Absolue Slider Demo</h1>
      <h6>Deneme: {deneme}</h6>
      <div>
        <AbsoluteSlide value={deneme} onChange={(e) => {setDeneme(e)} }>
          <span style={{padding: '0.5rem'}}>W</span>
        </AbsoluteSlide>
        <input value={deneme} onChange={(e) =>setDeneme(parseInt(e.target.value)) } />
      </div>

      <div>
        <AbsoluteSlide value={deneme1} onChange={(e) => {setDeneme1(e)} }>
          <span style={{padding: '0.5rem'}}>W</span>
        </AbsoluteSlide>
        <input value={deneme1} onChange={(e) =>setDeneme1(parseInt(e.target.value)) } />
      </div>

      <div>
        <AbsoluteSlide value={deneme2} onChange={(e) => {setDeneme2(e)} }>
          <span style={{padding: '0.5rem'}}>W</span>
        </AbsoluteSlide>
        <input value={deneme2} onChange={(e) =>setDeneme2(parseInt(e.target.value)) } />
      </div>

      <div>
        <AbsoluteSlide value={deneme3} onChange={(e) => {setDeneme3(e)} }>
          <span style={{padding: '0.5rem'}}>W</span>
        </AbsoluteSlide>
        <input value={deneme3} onChange={(e) =>setDeneme3(parseInt(e.target.value)) } />
      </div>

    </div>
  );
}

export default App;
