var add = document.querySelector(".add");
var msg = document.querySelector(".input");

add.addEventListener("click", function (event) {
    // Function
    var value = msg.value;
    var input = document.createElement("INPUT");
    var btn = document.createElement("BUTTON");
    var div = document.createElement("DIV");

    if (value != "") {
        // Input creation
        input.classList.add("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", msg.value);

        // Button creation
        btn.classList.add("remove");
        btn.innerText = "-";
        //Creating function to remove the field
        btn.addEventListener("click", function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });

        // Div creation
        div.classList.add("field");
        div.appendChild(input);
        div.appendChild(btn);

        // Append div to container
        document.querySelector(".container").appendChild(div);

        // Clear input field
        msg.value = "";
    } else {
        alert("Please, enter data");
    }
});

msg.addEventListener("keyup", function () {
    // Function
    var value = msg.value;
    var input = document.createElement("INPUT");
    var btn = document.createElement("BUTTON");
    var div = document.createElement("DIV");

    if (event.which == 13) {
        if (value != "") {
            // Input creation
            input.classList.add("input");
            input.setAttribute("type", "text");
            input.setAttribute("value", msg.value);

            // Button creation
            btn.classList.add("remove");
            btn.innerText = "-";
            //Creating function to remove the field
            btn.addEventListener("click", function () {
                this.parentNode.parentNode.removeChild(this.parentNode);
            });

            // Div creation
            div.classList.add("field");
            div.appendChild(input);
            div.appendChild(btn);

            // Append div to container
            document.querySelector(".container").appendChild(div);

            // Clear input field
            msg.value = "";
        } else {
            alert("Please, enter data");
        }
    }
});