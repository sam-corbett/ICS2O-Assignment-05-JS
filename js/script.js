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
 * This function displays an alert.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("num-a").value)
  var numB = parseFloat(document.getElementById("num-b").value)
  var numC = parseFloat(document.getElementById("num-c").value)

  var product = numC
  var counter = 0

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numB)
    document.getElementById("x-values").innerHTML += " x = " + counter + "</br>"
    document.getElementById("y-values").innerHTML += " y = " + product + "</br>"
}
}
