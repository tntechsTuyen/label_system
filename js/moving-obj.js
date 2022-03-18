
var tabMove = document.getElementById("tab-move");
var offsetWidth = tabMove.clientWidth;
var offsetHeight = tabMove.clientHeight;
function dragElement(idView) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var elmnt = document.getElementById(idView);
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    var x = elmnt.offsetLeft - pos1;
    var y = elmnt.offsetTop - pos2;

    var width = elmnt.offsetWidth;
    var height = elmnt.offsetHeight;

    // if(x >= 0){
    	elmnt.style.left = x + "px";
    // }
    // if(y >= 0){
    	elmnt.style.top = y + "px";
    // }

    infoObjectInView(elmnt);
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function infoObjectInView(view){
  var typeView = document.getElementById("type_view");
  var idView = document.getElementById("id_view");
  var nameView = document.getElementById("name_view");
  var value = document.getElementById("value");

  var fontSize = document.getElementById("font_size");
  var fontWeight = document.getElementById("font_weight");

  var widthObject = document.getElementById("width_object");
  var heightObject = document.getElementById("height_object");
  var objectX = document.getElementById("object_x");
  var objectY = document.getElementById("object_y");

  var border = document.getElementById("border");
  var bg = document.getElementById("background");

  typeView.value = view.getAttribute("type");
  idView.innerHTML = view.getAttribute("id");
  value.value = view.getAttribute("val");
  nameView.value = view.getAttribute("name");

  fontSize.value = view.style.fontSize.replace("px","");
  fontWeight.value = view.style.fontSize;
  border.value = view.style.border.replace("px solid", "").replace("px", "");
  var color = "#fff";
  if(view.style.background.length > 0){
    color = hexc(view.style.background);
  }
  bg.value = color;

  widthObject.value = view.offsetWidth;
  heightObject.value = view.offsetHeight;
  objectX.value = view.style.left.replace("px", "");
  objectY.value = view.style.top.replace("px", "");
}

function hexc(colorVal){
  var parts = colorVal.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete(parts[0]);
  for(var i = 0 ; i <= 3; ++i){
    parts[i] = parseInt(parts[i]).toString(16);
    if(parts[i].length == 1){
      parts[i] = '0'+parts[i];
    }
  }
  var color = "#"+parts.join('');
  color = color.replace("NaN", "");
  return color;
}