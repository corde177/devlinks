function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  // subistituir a img
  if (html.classList.contains("light")) {
    // Se tiver light Mode Add a img light
    img.setAttribute("src", "./assets/dodo.png")
  } else {
    // Se tiver light Mod, manter a img normal
    img.setAttribute("src", "./assets/profile.svg")
  }
}
