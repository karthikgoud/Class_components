import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class AboutClass extends Component {
  render() {
    return (
      <>
        <h1>About</h1>
        <Link to="profile">
          <p>View Profile</p>
        </Link>
        <Outlet />
      </>
    );
  }
}

export default AboutClass;
