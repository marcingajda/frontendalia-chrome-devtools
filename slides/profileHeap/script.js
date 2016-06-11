var number = 0;

function Frontendalia(){
    this.property = number++;
}

jQuery('#allocate_memory').click(() => {

    frontendaliaCollection = [];

    for(var i = 0; i < 1000; i++) {
        frontendaliaCollection.push(new Frontendalia());
    }

});