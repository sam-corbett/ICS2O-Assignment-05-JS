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
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
