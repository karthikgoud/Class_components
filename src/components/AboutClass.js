import { Component } from "react";
import ChildClass from "./ChildClass";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }

  componentDidMount() {
    console.log("Parent-componentDidMount ");
  }

  render() {
    console.log("Parent-render");
    return (
      <>
        <h1>About</h1>

        <ChildClass />
      </>
    );
  }
}

export default AboutClass;
