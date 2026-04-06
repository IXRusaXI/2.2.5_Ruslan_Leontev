import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage.ts'
import { useState, useEffect } from 'react'

function App() {
  const [value, updateValue] = useLocalStorage("key", 'Начальное значение');

  function onChange(evt: Event) {
    updateValue(evt.target.value)
  }

  return (
    <>
      <p>
        <label style={{ marginRight: '10px' }}>Сохраненное значение:</label>
        {value}
      </p>
      <p>
        <input onChange={onChange} value={value}/>
      </p>
    </>
  );
}

export default App;
