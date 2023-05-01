// =============== MOUSE EVENTS ===============
// CLICK
let btnClick = document.getElementById("click");
function clickEvent(){
    console.log("Clicked")
}
btnClick.addEventListener("click", clickEvent);


// MOUSEOVER & MOUSEOUT
let mouse_Over_Out = document.getElementById("mouse_Over_Out");
function mouse_Over(){
    console.log("Mouse Overed")
}
function mouse_Out(){
    console.log("Mouse Out")
}
mouse_Over_Out.addEventListener("mouseover", mouse_Over);
mouse_Over_Out.addEventListener("mouseout", mouse_Out);

// MOUSEDOWN & MOUSEUP
let mouse_Down_Up = document.getElementById("mouse_Down_Up");
function mouse_Down(){
    console.log("Mouse Down")
}
function mouse_Up(){
    console.log("Mouse Up")
}
mouse_Down_Up.addEventListener("mousedown", mouse_Down);
mouse_Down_Up.addEventListener("mouseup", mouse_Up);


// MOUSEMOVE
let mouseMove = document.getElementById("mouseMove");
function mouse_Move(){
    console.log("Mouse Move")
}
mouseMove.addEventListener("mousemove", mouse_Move);





// =============== KEYBOARD EVENTS ===============
// KEYDOWN
let keyDown = document.getElementById("keyDown");
function key_Down(){
    console.log(keyDown.value);
}
keyDown.addEventListener("keydown", key_Down);

// KEYUP
let keyUp = document.getElementById("keyUp");
function key_Up(){
    console.log(keyUp.value);
}
keyUp.addEventListener("keyup", key_Up);





// =============== FORM EVENTS ===============
// FOCUS & BLUR
let email = document.getElementById("email");
function focus(){
    email.style.borderColor = "blue";
}
function blur(){
    email.style.borderColor = "gray";
}
email.addEventListener("focus", focus);
email.addEventListener("blur", blur);

// SUBMIT
let formSubmit = document.getElementById("form");
function submit(){
    event.preventDefault();
    console.log("first");
}
formSubmit.addEventListener("submit", submit);

// CHANGE
let select = document.getElementById("select");
function selectValue(){
    console.log(select.value);
}
select.addEventListener("change", selectValue);





// =============== WINDOWS OR DOCUMENT EVENTS ===============
// LOAD
window.onload = function() {
    console.log("Load");
}

// UNLOAD
window.onunload = function() {
    console.log("Unload");
}

// RESIZE
window.onresize = function() {
    console.log("Resize");
}