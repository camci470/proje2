var closebtn = document.getElementsByClassName("close");
var i;
for (i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
}

let clos = `<span class="close">&times;</span>`//kapatma komutu

let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");

function newElement() {
    if (taskDOM.value.length > 0) {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${taskDOM.value} ${clos}`
        listDOM.appendChild(liDOM)
        liDOM.addEventListener("click", blue)
        taskDOM.value = "";


        $('li').hover(function () {
            $(this).find('span').click(function () {
                this.parentElement.style.display = 'none';
            })
        })
        function blue() {
            liDOM.className == "checked" ?
                liDOM.classList.remove("checked") :
                liDOM.classList.add("checked")
        }

        $(".success").toast('show')

    }
    else {
        $(".error").toast('show')
    }
}
let liAllDOM = document.querySelectorAll('li')
for (let j = 0; j < liAllDOM.length; j++) {
    liAllDOM[j].addEventListener("click", function () {
        liAllDOM[j].className == "checked" ?
            liAllDOM[j].classList.remove("checked") :
            liAllDOM[j].classList.add("checked")
    })
}
