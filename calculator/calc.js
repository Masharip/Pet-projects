let temp = "";
let disp = 0;
let first = "";
let second = "";
let operator = "";
let finish = false;
let waitingSecond = false;
let tochka = false;

function updateDisplay() {
  const tscreen = document.querySelector("#temp")
  const screen = document.querySelector("#fresult");
  screen.value = disp;
  tscreen.value = temp;
}

function chistka () {
   first = "";
  second = "";
 operator = "";
 finish = false;
 disp = 0;
 temp = 0;
 updateDisplay();
}


document.querySelector(".knopki").onclick = (event) => {
  if(!event.target.classList.contains("btn")) return;
  if(event.target.classList.contains("clear")) return chistka();
   
  disp = "";
  const key = event.target.textContent;

  if(event.target.classList.contains("back")) {
    if (first !== "" && second == "" && first.length > 1) {
    first = first.slice(0, -1); disp = first;
  } else if (first !== "" && second == "") {
    chistka();
  } else if (first !== "" && second !== "" && second.lenght > 1) {
    second = second.slice(0, -1); disp = second;
  } else if ((first !== "" && second !== "" && finish == false && second.lenght == 1)) {second = 0; 
    disp = second;}};

  if (event.target.classList.contains("vice")) {
    first = first*(-1); 
    disp = first; 
    temp += "*(-1)";}

  if (event.target.classList.contains("number")) {
  if (second == "" && first == "0" && operator == "") {
      temp += key;
      first = key;
      disp = first;
  } else if (second == ""  && operator == "") {
    temp += key;
    first += key;
    disp = first;
  } else if (first !== "" && waitingSecond == true && finish == false) {
    temp += key;
    second = key;
    finish = false;
    waitingSecond = false;
    disp = second;
  } else if (finish == true) {
    chistka();
    temp += key;
    first += key;
    disp = first;
    finish = false;
  } else {second += key; disp = second; temp += key;}
};

if (event.target.classList.contains("decimal")) {
  if (tochka == false) {
  if (second == "" && first == "" && operator == "") {
    temp += 0+key;
    first = 0+key;
    disp = first;
  } else if (second == "" && first == "0" && operator == "") {
    temp += key;
    first = 0+key;
    disp = first;
  } else if (second == "" && operator == "") {
  temp += key;
  first += key;
  disp = first;
} else if (first !== "" && waitingSecond == true && finish == false) {
  temp += 0+key;
  second = 0+key;
  finish = false;
  waitingSecond = false;
  disp = second;
} else if (finish == true) {
  chistka();
  temp += key;
  first = 0+key;
  disp = first;
  finish = false;
}
else {second += key; disp = second; temp += key;}
tochka = true;
} else return};

if (event.target.classList.contains("power0.5")) {
  if (second == "" && operator == "") {
  temp += "√" + first;
  first = Math.pow(first, 1/2);
  disp = first;
} else if (first !== "" && second !== "" && finish == false) {
  temp += "√" + second;
  second = Math.pow(second, 1/2);
  disp = second;
}};

if (event.target.classList.contains("power2")) {if (second == "" && operator == "") {
  temp += "sqr" + first;
  first = Math.pow(first, 2);
  disp = first;
} else if (first !== "" && second !== "" && finish == false) {
  temp += "sqr" + second;
  second = Math.pow(second, 2);
  disp = second;
}};

if (event.target.classList.contains("1/x")) {if (second == "" && operator == "") {
  temp += "*1/x";
  first = 1/first;
  disp = first;
} else if (first !== "" && second !== "" && finish == false) {
  temp += "*1/x";
  second = 1/second;
  disp = second;
}};

if (event.target.classList.contains("percentage")) {if (second == "" && operator == "") {
  temp += "%";
  first = first/100;
  disp = first;
} else if (first !== "" && second !== "" && finish == false) {
  temp += "%";
  second = second/100;
  disp = second;
}};

   if (event.target.classList.contains("operator")) {
    operator = key;
    disp = operator;
    console.log(operator);
    finish = false;
    tochka = false;
    temp += operator;
   }
  if (event.target.classList.contains("equal")) {
    switch (operator) {
      case "%": first = first/100;
      break;
      case "/": 
          if (second == 0) {
            dist = "Error";
            first = "";
            second = "";
            operator = "";
          } else {
          first = first / second;}
          break;                  
        case "*": first = first*second;
          break;
          case "+": first = Number(first) + Number(second);
          break;
          case "-": first = first - second;
          break; 
    }
    temp += "=" + first
    waitingSecond = true;
    finish = true;
    disp = first;
  }
  console.log(disp, first, second, operator, finish, waitingSecond);
  updateDisplay();
}
