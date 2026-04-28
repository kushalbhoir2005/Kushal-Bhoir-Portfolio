console.log("Portfolio Loaded Successfully 🚀");

const roles = "Data Analyst | ML Enthusiast | Data Scientist";
let index = 0;
let element = document.querySelector(".roles-line");

function typeLine() {
  if (index < roles.length) {
    element.innerHTML += roles.charAt(index);
    index++;
    setTimeout(typeLine, 50);
  } else {
    setTimeout(() => {
      element.innerHTML = "";
      index = 0;
      typeLine();
    }, 1500); // pause before restart
  }
}

typeLine();