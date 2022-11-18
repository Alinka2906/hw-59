import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([
    {title: 'Harry Potter and the Chamber of Secrets', id: 1},
    {title: 'Pirates of the Caribbean', id: 2},
    {title: 'Casper The Friendly Ghost', id: 3},
  ]);

  const [newItem, setNewItem] = useState([
    {title: '', id: 0},
  ]);

  const [itemsCount, setItemsCount] = useState(4);

  const url = 'https://api.chucknorris.io/jokes/random';

  const [jokes, setJokes] = useState([
    {value: ''}
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        setJokes(joke);
      }
    };

    fetchData().catch(e => console.error(e))
  }, []);

  const addItems = (id: number) => {
    const itemsCopy = [...items];
    const newItemCopy = {...newItem[0]};
    const currentItem = {...newItemCopy};
    currentItem.id = id;

    const input = document.getElementById('value') as HTMLInputElement;
    currentItem.title = input?.value;

    let countCopy = itemsCount;

    countCopy += 1;

    setItemsCount(countCopy);

    itemsCopy.push(currentItem);
    setItems(itemsCopy);
    input.value = '';
  }

  const removeItems = (id: number) => {
    const index = items.findIndex(p => p.id === id);
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const changeItem = (event: any, id: number) => {
    const index = items.findIndex(p => p.id === id);
    const itemsCopy = [...items];
    const itemCopy = {...itemsCopy[index]};
    itemCopy.title = event.target.value;
    console.log(event.target.value)
    itemsCopy[index] = itemCopy;
    setItems(itemsCopy);
  };


  let itemsList: React.ReactNode = null;


  if (items.length) {
    itemsList = (
      <div>
        {items.map(item => (
          <div key={item.id}>
            <div className='Note'>
              <p><input type="text" onChange={(event) => changeItem(event, item.id)} value={item.title}/></p>
              <button className="btn-orange btn-x" onClick={() => removeItems(item.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    itemsList = (
      <div className="yourOrder">
        <div>Please add some items!</div>
      </div>
    );
  }


  return (
    <div className="App">
      <div className="Block">
        <div className="movies">
          <div>
            <input id="value"/>
            <button onClick={() => addItems(itemsCount)}>Add</button>
          </div>
          <div>
            <h4>To watch list</h4>
          </div>
          <div className="mainBlock">
            <div className="yourOrderList">
              {itemsList}
            </div>
          </div>
        </div>
        <div className="jokes">
          <div className="joke-block">
            <div className="Joke">
              <div className="joke">{jokes.value}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
