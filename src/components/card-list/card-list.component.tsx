import { Component } from "react";
import { Monster } from "../../models/monster.type";
import Card from "../card/card.component";
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
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
