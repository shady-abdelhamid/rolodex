import { ChangeEvent, Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { Monster } from "./models/monster.type";
class App extends Component {
  state = {
    monsters: [] as Array<Monster>,
    keyword: "" as string,
  };

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        keyword,
      };
    });
  };

  render() {
    const { monsters, keyword } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(keyword)
    );
    return (
      <div className="App">
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
