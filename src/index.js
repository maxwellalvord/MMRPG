import $ from 'jquery';
import welcome from "./js/salutation.js";
import {storeState, changeState, stateControl, setName} from './js/comp.js';

// let player = {name: "", health:10, PP:10};
// let playerStats = [];

// const characterGenerator = (playerInput) => {
//   const userPlayer = storeState(player);
//   // const userName = userPlayer(setName(playerInput));
//   userPlayer(setName(`player${playerInput}`));
//   playerStats.push(userPlayer);
// }

$(document).ready(function () {
  let player = {name: "", health:10, PP:10};
  let playerStats = [];

  const characterGenerator = (playerInput) => {
    const userPlayer = storeState(player);
    // const userName = userPlayer(setName(playerInput));
    userPlayer(setName(`${playerInput}`));
    playerStats.push(userPlayer);
  }

  $("#form").submit(function(event){
    event.preventDefault();
    let playerInput = $("#charInput").val();
    characterGenerator(playerInput);
    console.log(playerInput);
    console.log(playerStats[0]());
  })
  
$("#r1").submit(function (event) {
  event.preventDefault();
  let sal = $("#sal").val();
  let fname = $("#fname").val();
  console.log(sal);
  $("#greeting").append(welcome(sal)(fname));
  console.log(playerStats);
})
})
