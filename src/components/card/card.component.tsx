import React, { Component } from "react";
import "./card.styles.scss";
import { Monster } from "../../models/monster.type";

type Props = {
  monster: Monster;
};

export default class Card extends Component<Props> {
  render() {
    const { monster } = this.props;
    return (
      <div key={monster.id} className="card__container">
        <img
          src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
          alt={monster.name}
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
    );
  }
}
