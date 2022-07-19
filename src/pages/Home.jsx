import "../App.css";
import React from "react";
import { Add, Search } from "../components";
import {Card, Footer, Navbar} from '../layouts'

const Home = () => {
  return (
      <div class="layout">
        <Navbar />
        <Card />
        <aside class="lateral">
          <Add />
          <Search />
        </aside>
        <Footer />
      </div>

  );
};

export default Home;
