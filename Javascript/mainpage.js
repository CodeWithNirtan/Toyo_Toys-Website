$(document).ready(function()
{

var quantity=0;
$('.quantity-right-plus').click(function(e)
{
e.preventDefault();
var quantity = parseInt($('.quantity1').val());
    
    $('.quantity1').val(quantity + 1);

});

$('.quantity-left-minus').click(function(e)
{
e.preventDefault();

var quantity = parseInt($('.quantity1').val());

    if(quantity>0)
    {
    $('.quantity1').val(quantity - 1);
    }
});

});


$(document).ready(function()
{

var quantity=0;
$('.cart').click(function(e)
{
e.preventDefault();
var quantity = parseInt($('.shop').val());
    
    $('.shop').val(quantity + 1);

});

});


$(document).ready(function()
{

var quantity=0;
$('.carting').click(function(e)
{
e.preventDefault();
var quantity = parseInt($('.shop').val());
    
    $('.shop').val(quantity + 1);

});

});


document.querySelectorAll("navbar a").forEach(function(a)
{
    a.setAttribute('target', '_blank');
})
// for Map//
function myMap() {
var mapProp= {
center:new google.maps.LatLng(24.860966,66.990501),
zoom:5,
};
var map = new google.maps.Map(document.getElementById("formap"),mapProp);
}

// for down to top button


var mybutton = document.getElementById("mybtn");
// when will be button show and hidden.
window.onscroll = function(){btndisplay()};

function btndisplay() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}
function functiontop() {
    document.body.scrollTop = 0;    
    document.documentElement.scrollTop = 0;    
}
// for down to top button



