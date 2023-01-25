import { Component } from "react";
import Card from "./Card";

class Body extends Component {
  render() {
    return (
      <div className="card-body">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Body;
