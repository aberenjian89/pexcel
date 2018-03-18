$("a").click(function(e){
    console.log("Hello")
    $(this).toggleClass("hidden-container");
    e.preventDefault();
});