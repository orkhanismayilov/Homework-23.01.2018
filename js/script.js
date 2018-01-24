var add = document.querySelectorAll(".add");
var message = document.querySelector(".input");

for (i = 0; i < add.length; i++) {
    add[i].addEventListener("click", function () {
        var div = document.createElement("DIV");
        var a = '<input type="text" class="input" placeholder="Type Something"><button class="add-a">+</button>';
        div.classList.add("field");
        div.innerHTML = a;
        document.querySelector(".container").appendChild(div);
        message.value = "";
    })
}
