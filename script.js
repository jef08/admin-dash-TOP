const help_icon = document.querySelector(".help-icon")
const right = document.querySelector(".right")

let helpIconHover = document.createElement("div");
helpIconHover.classList.add('helpIconHover');
let divText = document.createTextNode("Why hello there");
helpIconHover.appendChild(divText);

help_icon.addEventListener ("click", () => {
    document.body.insertBefore(helpIconHover, help_icon)
})
