import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue(prev => prev + 1);
  const onChange = e => setKeyword(e.target.value);
  console.log('Run all the time');
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);
  useEffect(() => {
    console.log('SEARCH FOR', keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Enter here'
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click!</button>
    </div>
  );
}

export default App;
