import React from "react";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img
              src="https://raw.githubusercontent.com/bradtraversy/project-mgmt-graphql/main/client/src/components/assets/logo.png"
              alt="logo"
              className="mr-2"
            />
            <div>Project Managment</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
