function setDefaultTheme() {
  var theme = detectColorScheme();
  if (theme == "dark") {
    // add active class to dark button
    var element = document.getElementById("uwu-dark");
    element.classList.add("active-theme");
  } else {
    // add active class to light button
    var element = document.getElementById("uwu-light");
    element.classList.add("active-theme");
  }
}
setDefaultTheme();

function switchTheme() {
  var theme = detectColorScheme();
  if (theme == "dark") {
    // change to light theme
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");

    // Add active to light button
    var element = document.getElementById("uwu-light");
    element.classList.add("active-theme");

    // remove active from dark button
    var element = document.getElementById("uwu-dark");
    element.classList.remove("active-theme");
  } else {
    // change to dark theme
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");

    // Add active to dark button
    var element = document.getElementById("uwu-dark");
    element.classList.add("active-theme");

    // remove active from light button
    var element = document.getElementById("uwu-light");
    element.classList.remove("active-theme");
  }
}

// Detect Color Theme
function detectColorScheme() {
  var theme = "light"; //default to light

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  return theme;
}
