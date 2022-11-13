import "./styles.css";
var color = document.getElementById("color-button");
let index = 0;
const change = ["green", "blue", "purple"];
color.addEventListener("click", function co() {
  var child = document.getElementById("app");
  child.style.backgroundColor = change[index];
  // child.style.backgroundColor = "pink";
  index = index >= change.length - 1 ? 0 : index + 1;
  // color.innerHTML = "bhavya";
});

// var inn=document.getElementById('shapes');
let x = 0;
const shapew = ["50px", "0px", "50px"];

const shapeB = ["", "30px solid transparent", ""];
const shapeBT = ["", "10px", ""];
const shapeBott = ["px", "", ""];
const radi = ["50%", "", ""];

var shapebutton = document.getElementById("shape-button");
shapebutton.addEventListener("click", function sh() {
  var inn = document.getElementById("shapes");
  inn.style.width = shapew[x];
  //  inn.style.height=shapeh[x];
  // inn.style.border='50px solid transparent';
  inn.style.border = shapeB[x];
  inn.style.borderTop = shapeBT[x];
  inn.style.borderBottom = shapeBott[x];
  inn.style.borderRadius = radi[x];
  // inn.style.borderBottom='';

  //inn.innerHTML='bhav';
  x = x >= radi.length - 1 ? 0 : x + 1;
});

// var shape= document.getElementById('shape');
