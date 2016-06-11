jQuery('.console .button').click(function(){
    // dummy console implementation
    eval(jQuery(this).prev().text());
});