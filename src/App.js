import React, { useState } from "react";
import "./styles.css";
let recomendations = {
  punjabi: {
    1: "Daru Badnam",
    2: "Sarkar",
    3: "Libas"
  },
  romantic: {
    1: "Duniya",
    2: "Chahun Main Ya Na"
  },
  sad: {
    1: "Ek Raat",
    2: "Tum Hi Ana",
    3: "Zaruri Tha"
  }
};
let finalsonglist;
var musicgenre = Object.keys(recomendations);
export default function App() {
  let [songgenre, setsonggenre] = useState("");

  function genreclickhandler(item) {
    let songlist = recomendations[item];
    setsonggenre(songlist);
  }
  finalsonglist = Object.keys(songgenre);

  return (
    <div className="App">
      <h1 className="heading">Song Recomendation App</h1>
      {musicgenre.map(function (item, index) {
        return (
          <button
            key={index}
            onClick={() => genreclickhandler(item)}
            className="buttons"
          >
            {item}
          </button>
        );
      })}
      <hr></hr>
      <ul className="songlist">
        {finalsonglist.map((item, index) => {
          return <li className="list">{songgenre[item]}</li>;
        })}
      </ul>
    </div>
  );
}
