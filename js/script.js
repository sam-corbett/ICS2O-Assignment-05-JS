// Copyright (c) 2023 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-JS/sw.js", {
    scope: "/ICS2O-Assignment-05-JS/",
  })
}

/**
 * This function displays the answers for each equation!
 */
function myButtonClicked() {
  var numAdd1 = parseFloat(document.getElementById("variable-addition-1").value)
  var numAdd2 = parseFloat(document.getElementById("variable-addition-2").value)
  var numMulti1 = parseFloat(document.getElementById("variable-multiply-1").value)
  var numMulti2 = parseFloat(document.getElementById("variable-multiply-2").value)

  var productAdd = numAdd1 + numAdd2
  var productMulti = 0
  var counter = 0
  
  document.getElementById("evaluate-equations").innerHTML = "Both numbers add up to " + productAdd + "."
  
  while (counter < Math.abs(numMulti2)) {
    counter++
    productMulti = productMulti + Math.abs(numMulti1)
  }

  
  if ((numMulti1 < 0 && numMulti2 > 0) || (numMulti2 < 0 && numMulti1 > 0))
    document.getElementById("evaluate-equations").innerHTML =
      "Both numbers multiply to -" + productMulti + "."
  else
    document.getElementById("evaluate-equations").innerHTML =
      "Both numbers multiply to " + productMulti + "."

}
