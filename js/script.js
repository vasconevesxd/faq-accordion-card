var buttonAccordion = document.getElementsByClassName("button");
var bodyContent = document.getElementsByClassName("card__body");
var titles = document.getElementsByTagName("h3");
var images = document.getElementsByClassName("icon-arrow");

for (i = 0; i < buttonAccordion.length; i++) {
    buttonAccordion[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {

    for (let index = 0; index < bodyContent.length; index++) {
        bodyContent[index].classList.remove('open');
        images[index].style.transform = "rotate(0deg)";
        titles[index].style.fontWeight = "400"; 
    }
    var title = this.getElementsByTagName("h3");
    var image = this.getElementsByClassName("icon-arrow");
    var panel = this.nextElementSibling;

    title[0].style.fontWeight = "900"; 
    image[0].style.transform = "rotate(180deg)";
    panel.classList.toggle('open');


}