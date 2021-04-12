var buttonAccordion = document.getElementsByClassName("button");
var bodyContent = document.getElementsByClassName("card__body");

for (i = 0; i < buttonAccordion.length; i++) {
    buttonAccordion[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {

    var panel = this.nextElementSibling;
    console.log(panel);
    panel.classList.toggle('open');
 
}