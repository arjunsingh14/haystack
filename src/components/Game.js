import React from "react";
import gamePic from "../assets/background.jpeg";
import { useState, useEffect, useLayoutEffect } from "react";
import Timer from "./Timer";
import { useGlobalContext } from "../context";
import Modal from "./Modal";
import GameOver from "./GameOver";
const Game = () => {
  const [dimension, setDimension] = useState({ x: 0, y: 0 });
  const [coords, setCoords] = useState({ width: 0, height: 0 });
  const [showModal, setShowModal] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [isGameOver, setIsGameOver] = useState(false);
  const { game, setGame } = useGlobalContext();
  
  const detectWin = () => {
    let isWin = true;
    game.forEach((element) => {
      if (element.found === false) {
        isWin = false;
      }
    });
    if (isWin) {
      setIsGameOver(isWin);
    }
  };

  const handleResize = () => {
    setDimension(getDimensions);
  };
  useEffect(() => {
    isFound(currentCharacter);
  }, [currentCharacter]);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize());
    return () => {
      window.removeEventListener("resize", handleResize());
    };
  }, []);

  const isFound = (character) => {
    if (
      character.relX * dimension.width - 50 <= coords.x &&
      coords.x <= character.relX * dimension.width + 50 &&
      character.relY * dimension.height - 50 <= coords.y &&
      coords.y <= character.relY * dimension.height + 50
    ) {
      game.map((char) => {
        if (char.id === character.id) {
          return { ...(char.found = true) };
        }
      });
      setGame(game);
      detectWin();
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
    setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    const modal = document.querySelector(".active");
    modal.style.left = `${e.nativeEvent.offsetX}px`;
    modal.style.top = `${e.nativeEvent.offsetY}px`;
    setShowModal(!showModal);
  };
  return (
    <main className="game-container" onLoad={getDimensions}>
      <div className="timer-container">
        <h2><Timer isGameOver={isGameOver}/></h2>
      </div>
      {/* <Modal></Modal> */}
      <div className="img-container">
        <Modal
          style={showModal}
          game={game}
          setChar={setCurrentCharacter}
          setCoords={setCoords}
        />
        <img
          id="game-pic"
          src={gamePic}
          alt="game"
          onClick={(e) => handleMouse(e)}
        />
      </div>

      {isGameOver && <GameOver />}
    </main>
  );
};

export default Game;
