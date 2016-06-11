jQuery('#add').click(() => {

    var newElement = getNewElement();

    document.getElementById('list').appendChild( newElement );



















    // HAHA! Nigdy tego nie znajdziecie!!!

    setTimeout(function(){

        document.getElementById('list').removeChild(list.lastChild);

    }, 500);

});









function getNewElement() {
    var node = document.createElement('li');
    var text = document.createTextNode('Zdarzenia DOM');
    node.appendChild(text);
    return node;
}