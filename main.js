let panel = document.querySelector(".panel");
let panel_li = panel.querySelectorAll("li");
let btns = document.querySelectorAll(".btns li");

btns.forEach (function(el,index){
    el.addEventListener("click",function (e) {
        e.preventDefault();

        for (let el of btns) {el.classList.remove("on")}
        btns[index].classList.add("on");

        panel.style.marginLeft = "-100" * index + "%";
    })
})