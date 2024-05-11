/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let pronoun = ["A ", "The ", "Her "];
  let subject = ["cat", "old man", "lawnmower", "gecko", "dog"];
  let action = [
    "took my",
    "ate my",
    "slapped my",
    "screamed at my",
    "stole my",
    "jumped on my"
  ];
  let possession = ["homework", "phone", "water bottle", "watch"];
  let where = ["in the street", "at the park", "at my house", "at the movies"];
  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possession.length);
  let whereIndx = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possession[possIndx] +
    " " +
    where[whereIndx]
  );
};
window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello World");
};
