import $ from 'jquery';
import welcome from "./js/salutation.js";

$(document).ready(function () {
  // let sal = $("#sal").val();
  // let fname = $("#fname").val();
  // console.log(sal);
  $("#r1").submit(function () {
    let sal = $("#sal").val();
    let fname = $("#fname").val();
    console.log(sal);
    $("#greeting").append(welcome(sal)(fname)).show();
  })
})
