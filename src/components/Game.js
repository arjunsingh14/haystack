import React from "react";
import gamePic from "../assets/background.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Game = () => {
  const [dimension, setDimension] = useState({ x: 0, y: 0 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showModal, setShowmodal] = useState({})
  //   const { game } = useGlobalContext();
  const game = { name: "Neo", found: false, relX: 0.41, relY: 0.22 };
  useEffect(() => {
    isFound(game);
    const handleResize = () => {
        setDimension(getDimensions);
    }
    window.addEventListener('resize', handleResize());
    return () => {window.removeEventListener('resize', handleResize())}
  }, [coords]);

  const isFound = (character) => {
    console.log('fired');
    if (
      character.relX * dimension.width - 50 <= coords.x &&
      coords.x <= character.relX * dimension.width + 50 &&
      character.relY * dimension.height - 50 <= coords.y &&
      coords.y <= character.relY * dimension.height + 50
    ) {
      alert("found");
    }
  };

  /*
  getDimension returns the initial width and height of
  the game relative to the user's device. Which will
  be used to calculate the relative position of every possible
  character.
  */

  const getDimensions = () => {
    const img = document.querySelector("#game-pic");
    const rect = img.getBoundingClientRect();
    setDimension({ width: rect["width"], height: rect["height"] });
  };

  //when the user clicks handle
  const handleMouse = (e) => {
      setCoords({x: e.clientX, y: e.clientY})
  };
  return (
    <main className="game-container" onLoad={getDimensions}>
      <div className="timer-container">
        <h2>00:00:00</h2>
      </div>
      <div className="">
        <ul className="dropdown">
          <a href="">Neo</a>
          <a href="">Neo</a>
          <a href="">Neo</a>
        </ul>
        <img
          id="game-pic"
          src={gamePic}
          alt="game"
          onClick={(e) => handleMouse(e)}
        />
      </div>
    </main>
  );
};

export default Game;
