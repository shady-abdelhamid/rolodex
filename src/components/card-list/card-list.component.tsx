import { Monster } from "../../models/monster.type";
import Card from "../card/card.component";
import "./card-list.styles.css";

/** Card list props */
type Props = {
  monsters: Array<Monster>;
};

const CardList = ({ monsters }: Props) => (
  <div className="card-list">
    {monsters.map((monster: Monster) => (
      <Card monster={monster} />
    ))}
  </div>
);

export default CardList;
