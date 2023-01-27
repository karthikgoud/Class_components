import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h1>Restaurant cards</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2>
      </div>
    );
  }
}

export default Card;
