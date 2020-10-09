import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addAnime } from './store/actions/animes';
import { AnimeState } from './store/reducers/animes';

function App() {
  const myList = useSelector<AnimeState, AnimeState["myList"]>((state) => state.myList);
  const dispatch = useDispatch();

  let [newAnime, setNewAnime] = useState("");

  const onAddAnime = (anime: string) => {
    dispatch(addAnime(anime));
  }

  function handlerSubmit(event: FormEvent) {
    event.preventDefault();
    onAddAnime(newAnime);
    setNewAnime('');
  }

  return (
    <div className="App">
      <main className="App-header">
        <h1>My Anime List</h1>

        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            value={newAnime}
            onChange={(event) => setNewAnime(event.target.value)}
            required
          />

          <button type="submit">+</button>
        </form>

        <ul>
          {myList !== undefined && myList.map((anime, index) => (
            <li key={index}>{anime}</li>
          ))}
        </ul>

      </main>
    </div>
  );
}

export default App;
