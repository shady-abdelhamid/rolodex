import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { Monster } from "./models/monster.type";

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [monsters, setMonsters] = useState<Array<Monster>>([]);
  const [filteredMonsters, setFilteredMonsters] =
    useState<Array<Monster>>(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(keyword)
      )
    );
  }, [monsters, keyword]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
