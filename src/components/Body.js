import { Component } from "react";
import Card from "./Card";

class Body extends Component {
  render() {
    return (
      <div className="card-body">
        <Card name="restaurant" location="ballari" />
        <Card name="restaurant" location="ballari" />
        <Card name="cart" location="mysore" />
        <Card name="restaurant" location="ballari" />
        <Card name="taxi" location="hubli" />
        <Card name="restaurant" location="ballari" />
      </div>
    );
  }
}

export default Body;
