//********NEED TO DO */
/*
- Create square color change when hovered
- create reset button that changes it back to 16x16
- change number input into a number SLIDER ******
- CSS things *******

*/
//const number = quantity;

const grid = document.getElementById("grid_div");
const userInput = document.getElementById("quantity");
const reset_button = document.querySelector(".reset");
const square_div = document.querySelector(".square");
const output_div = document.querySelector('.grid-output')

//popular choices
const div_4 = document.getElementById("choice-4");
const div_16 = document.getElementById("choice-16");
const div_24 = document.getElementById("choice-24");
const div_32 = document.getElementById("choice-32");
const div_48 = document.getElementById("choice-48");
const div_64 = document.getElementById("choice-64");
const div_80 = document.getElementById("choice-80");
const div_88 = document.getElementById("choice-88");
const div_100 = document.getElementById("choice-100");

function createGrid(){
  grid.innerHTML='';
  grid.style.setProperty(
    'grid-template-columns',
    'repeat(16,2fr)'
  );
  grid.style.setProperty(
    'grid-template-rows',
    'repeat(16, 2fr)'
  );
  for (let n=0; n < 256; n++){
    const div = document.createElement('div');
    div.classList.add('square') //create class .square
    grid.appendChild(div);
  };
}

//upgrade grid
function upgradeGrid(num){
  if (num>0 && num<=100){
    grid.innerHTML='';
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${num}, 2fr)`
    );
    grid.style.setProperty(
      "grid-template-rows",
      `repeat(${num}, 2fr)`
    );
    for (let i=0; i< (Math.pow(num,2)); i++){
      const div = document.createElement('div');
      div.classList.add('square') //create class .square
      grid.appendChild(div);
    }
  }
  else{
    console.log('error');
  }
}

//slider number change
  function changeNumber(num){
    output_div.innerText='';
    output_div.innerText= num;
}

//Calls function
  createGrid();
//DOM EVENTS
  reset_button.addEventListener('click',createGrid);
  userInput.addEventListener("mousemove", () => { upgradeGrid(`${userInput.value}`)}); 
  userInput.addEventListener("mousemove", () => { changeNumber(`${userInput.value}`)}); 






/*
//pop choice selected
div_4.addEventListener("click", () => { upgradeGrid(4)}); 
div_16.addEventListener("click", () => { upgradeGrid(16)}); 
div_24.addEventListener("click", () => { upgradeGrid(24)}); 
div_32.addEventListener("click", () => { upgradeGrid(32)}); 
div_48.addEventListener("click", () => { upgradeGrid(48)}); 
div_64.addEventListener("click", () => { upgradeGrid(64)}); 
div_80.addEventListener("click", () => { upgradeGrid(80)}); 
div_88.addEventListener("click", () => { upgradeGrid(88)}); 
div_100.addEventListener("click", () => { upgradeGrid(100)}); 




*/





































/*
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};
updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

//Selects Square and  replaces color
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});


//color cell
createGrid();
document.getElementByClassName('cell').addEventListener('mouseout','colorCell')

*/