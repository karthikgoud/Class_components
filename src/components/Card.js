import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="card">
        <h1>Restaurant cards</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}

export default Card;
