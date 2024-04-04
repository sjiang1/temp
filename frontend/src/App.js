import './App.css';
import { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'

function App() {
  const [itemId, setItemId] = useState("1")
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (itemId == "") {
      setItem(null);
    } else {
      fetch(`http://localhost:8000/items/${itemId}`)
      .then(result => result.json())
      .then(result => {
        console.log(`http://localhost:8000/items/${itemId}`)
        setItem(result);
      })
    }
    console.log(itemId);
  }, [itemId]);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="App">
      <header className="App-header">
        <TextField id="outlined-basic" label="Item Id" variant="outlined"
         color="warning" focused value={itemId}
         onChange={e => setItemId(e.target.value)} />

        <List>{item && 
          <ListItem>
            <ListItemIcon><LocalMoviesIcon /></ListItemIcon>
            <ListItemText primary={item['q']} />
          </ListItem>
        }</List>
      </header>
    </div>
  );
}
export default App;
