import $ from 'jquery';
import welcome from "./js/salutation.js";

$(document).ready(function () {
  $("#r1").submit(function (event) {
    event.preventDefault();
    let sal = $("#sal").val();
    let fname = $("#fname").val();
    console.log(sal);
    $("#greeting").append(welcome(sal)(fname));
  })
})
