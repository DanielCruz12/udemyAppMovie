import "../App.css";
import React from "react";
import { Add, Search } from "../components";
import {Card, Footer, Navbar} from '../layouts'

const Home = () => {
  return (
      <div className="layout">
        <Navbar />
        <Card />
        <aside className="lateral">
          <Add />
          <Search />
        </aside>
        <Footer />
      </div>

  );
};

export default Home;
