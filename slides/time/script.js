jQuery('.tick').click(function(){
    setTimeout(() => jQuery(this).toggleClass('active'), 1000);
});

function timeConsumingTask(){
    var i=0;
    setTimeout(function(){
        while(i<500000000){
            i++;
        }
    }, 0);
}