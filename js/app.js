function data() {
    let name = window.document.getElementsByClassName("post");
    for (let x = 0; x < name.length; x++) {
        if (name[x].value == "") {
            name[x].style.backgroundColor = "purple";
        }
        else {
            name[x].style.backgroundColor = "white"

        }
    }
}

