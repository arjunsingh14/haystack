import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="home-page">
      <div className="blur">
        <Navbar></Navbar>
        <Introduction />
      </div>
    </main>
  );
};

const Introduction = () => {
  return (
    <div className="rules-container">
      <article className="rules">
        <h2>About Haystack</h2>
        <div className="rules-para">
          <p>
            Haystack is a Where's-Waldo clone. Players will have to find three
            characters from a random pool in increasing difficulty and they will
            be scored based on the time it takes to find all three.
          </p>
        </div>
        <Link to="/setup">
          <button className="btn">Continue</button>
        </Link>
      </article>
    </div>
  );
};

export default Home;
