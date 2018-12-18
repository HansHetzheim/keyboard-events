let changebgc = document.getElementById('character');

document.addEventListener("keypress", function(event) {
  let key = event.which - 48;
  switch (key) {
    case 0:
      changebgc.style.backgroundColor = "red";
      break;
    case 1:
      changebgc.style.backgroundColor = "blue";
      break;
    case 2:
      changebgc.style.backgroundColor = "green";
      break;
    case 3:
      changebgc.style.backgroundColor = "yellow";
      break;
    case 4:
      changebgc.style.backgroundColor = "orange";
      break;
    case 5:
      changebgc.style.backgroundColor = "purple";
      break;
    case 6:
      changebgc.style.backgroundColor = "black";
      break;
    case 7:
      changebgc.style.backgroundColor = "white";
      break;
    case 8:
      changebgc.style.backgroundColor = "pink";
      break;
    case 9:
      changebgc.style.backgroundColor = "brown";
      break;
    default:
  }
});


let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');

document.addEventListener("keydown", function(event) {
  let key = event.which;
  switch (key) {
    case 37:
      left.classList.add("highlight");
      break;
    case 38:
      up.classList.add("highlight");
      break;
    case 39:
      right.classList.add("highlight");
      break;
    case 40:
      down.classList.add("highlight");
      break;
  }
});
document.addEventListener("keyup", function(event) {
  let key = event.which;
  switch (key) {
    case 37:
      left.classList.remove("highlight");
      break;
    case 38:
      up.classList.remove("highlight");
      break;
    case 39:
      right.classList.remove("highlight");
      break;
    case 40:
      down.classList.remove("highlight");
      break;
  }
});
