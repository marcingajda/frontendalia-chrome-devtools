for(var i=0; i<50; i++){

    setTimeout(() => {

        jQuery('#cats').append('<img src="https://placekitten.com/100/100?">');

    }, 100*i);

}