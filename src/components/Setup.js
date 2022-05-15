import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpeg";
import { useGlobalContext } from "../context";

const Setup = () => {
  const { gameSeed } = useGlobalContext();
  console.log(gameSeed);
  return (
    <main className="setup-page">
      <nav className="navbar-setup">
        <Link to="/scoreboard" className="scores setup">
          Scoreboard
        </Link>
      </nav>
      <div className="container setup">
        <div className="pic-container">
          <img className="game-pic" src={background} alt="" />
        </div>
        <article className="article-container">
          <h2 className="char-header">Characters to find</h2>
          <div className="character-container">
            {gameSeed.map((character, index) => {
              if (index === 0) {
                return (
                  <div key={character.id} className="characters left">
                    <img src={character.url} alt="" />
                    <h3 className="name">{character.name}</h3>
                  </div>
                );
              } else if (index === 1) {
                return (
                  <div key={character.id} className="characters middle">
                    <img src={character.url} alt="" />
                    <h3>{character.name}</h3>
                  </div>
                );
              } else {
                return (
                  <div key={character.id} className="characters right">
                    <img src={character.url} alt="" />
                    <h3>{character.name}</h3>
                  </div>
                );
              }
            })}
          </div>
          <div className="ready-container">
            <Link className="ready" to="/game">
              Start game!
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Setup;
