import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = e => setToDo(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo('');
  };
  const removeBtn = key => {
    setToDos(currentToDos =>
      currentToDos.filter((_, currentKey) => currentKey !== key)
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Enter to do'
        ></input>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, key) => (
          <li key={key}>
            {toDo}
            <button onClick={() => removeBtn(key)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
