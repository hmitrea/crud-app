// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("CLICK !!!!");
// })


{/* <button id="add">Add</button>
<button id="delete">Delete</button>
<button id="update">Update</button>
<button id="get">Get</button> */}

var addButton = document.getElementById("add");    
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}


function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeyPress(){
    if (inputLength() > 0 && event.keyCode == 13){
        createListElement();
    }
}

addButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);
