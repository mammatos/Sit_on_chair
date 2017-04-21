console.log('działa');

var calculatorListArrows = document.getElementsByClassName('list_arrow');

for(var i = 0; i < calculatorListArrows.length; i++) {
    calculatorListArrows[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('visible');
    });
}
//This loop make list_panel visible after click on arrow.

var listPanels = document.getElementsByClassName('list_panel');
var filler = document.getElementById('filler');

for(var i = 0; i < listPanels.length; i++) {
    var itemsListPanels = listPanels[i].children;

    for(var j = 0; j < itemsListPanels.length; j++) {
        itemsListPanels[j].addEventListener('click', function() {
            console.log('click');
            filler.style.display = "none";
            var cloneItem = this;
            // When client want to add item to summary_panel, 'Twój fotel' disappears by display:none.
        });
    }
}

