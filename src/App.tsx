import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage.ts'
import { useState, useEffect } from 'react'

function App() {
  const [value, updateValue] = useLocalStorage("key", 'Начальное значение');
  const [input, setInput] = useState('')

  useEffect(() => {
    setInput(value)
  }, [])

  function onChange(evt: Event) {
    setInput(evt.target.value)
    updateValue(evt.target.value)
  }

  return (
    <>
      <p>
        <label style={{ marginRight: '10px' }}>Сохраненное значение:</label>
        {value}
      </p>
      <p>
        <input onChange={onChange} value={input}/>
      </p>
    </>
  );
}

export default App;
