import { Component } from "react";
import ChildClass from "./ChildClass";

class ParentClass extends Component {
  constructor(props) {
    super(props);
    console.log("Child-Constructor");
  }

  componentDidMount() {
    console.log("Child-componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child- update");
  }

  componentWillUnmount() {
    console.log("Child- unmount");
  }

  render() {
    console.log("Child-render");

    return <h1>Child</h1>;
  }
}

export default ParentClass;
