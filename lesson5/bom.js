const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    let myItem = input.value;
    input.value = "";

    let error = document.querySelector(".error");
    
    if (myItem == "") {
       error.style.display = "block" 
    }

    else {
        error.style.display = "none"

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "❌";
    list.appendChild(listItem);

    listBtn.addEventListener("click", function (e) {
        list.removeChild(listItem);
    });}
});


function off(){
    document.querySelector(".error")
    .style.display = "none";
}