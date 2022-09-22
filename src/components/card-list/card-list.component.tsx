import { Component } from "react";
import { Monster } from "../../models/monster.type";

/** Card list component props */
type Props = {
  monsters: Array<Monster>;
};

class CardList extends Component<Props> {
  render() {
    const { monsters } = this.props;

    return (
      <ul>
        {monsters.map((monster: Monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    );
  }
}

export default CardList;
