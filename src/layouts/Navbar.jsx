import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      {/*cabecera*/}
      <div className="layout">
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>PelidanMovie</h1>
        </header>

        <nav className="nav">
          <ul>
            {/*<li><link to>Home</link></li>
            <li><link to>Pelis</link></li>
  <li><link to>Fav</link></li>*/}
            <a href="https://google.com">Home</a>
            <a href="https://google.com">Home</a>
            <a href="https://google.com">Home</a>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
