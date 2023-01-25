import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <li>About</li>
          <li>Contact</li>
          <li>Products</li>
        </ul>
      </div>
    );
  }
}

export default Header;
