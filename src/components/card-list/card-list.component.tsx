import { Component } from "react";
import { Monster } from "../../models/monster.type";
import "./card-list.styles.css";

/** Card list component props */
type Props = {
  monsters: Array<Monster>;
};

class CardList extends Component<Props> {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster: Monster) => (
          <div key={monster.id} className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
              alt={monster.name}
            />
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
