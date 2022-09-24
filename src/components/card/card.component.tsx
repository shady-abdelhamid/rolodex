import { Monster } from "../../models/monster.type";
import "./card.styles.scss";

type Props = {
  monster: Monster;
};

const Card = ({ monster }: Props) => (
  <div key={monster.id} className="card__container">
    <img
      src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
      alt={monster.name}
    />
    <h1>{monster.name}</h1>
    <p>{monster.email}</p>
  </div>
);

export default Card;
