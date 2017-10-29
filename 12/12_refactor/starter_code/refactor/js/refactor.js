//#1: How can you use arrays here
$(".info").append("<img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/19a/386/31be5db.jpg' alt='William\'s picture'><p>The instructor for this course is Wylesha Rachell. Wylesha has a degree in Business Management from LSU.</p>");

//#2: How can you turn this into a function

var myGroceryList = [
'Milk',
'Cookies',
'Sugar',
'Bananas',
'Gatorade',
'Oreos',
'Wine'
];

$(myGroceryList).each(function(i, item) {
	console.log(item);
	$('.groceryList').append('<li>'+item+'</li>');
});


$(".list-items").prepend("<li>Milk</li>");
$(".list-items").prepend("<li>Cookies</li>");
$(".list-items").prepend("<li>Sugar</li>");
$(".list-items").prepend("<li>Bananas</li>");
$(".list-items").prepend("<li>Gatorade</li>");

//#3: Take the same example and use an array
//

//#4: Combine jQuery Selectors
$("#container", "#main").css("width","960px");
$("#container", "#main").css("background","grey");
$("#container", "#main").css("color","#fff");
$("#container", "#main").css("font-size","14px");
$("#container", "#main").css("box-shadow","0 0 10px #ccc");

/*
$("#container", "#main").css({
	"width": "960px",
	"background": "grey",
	"color": "#fff",
	"font-size": "14px",
	"box-shadow": "0 0 10px #ccc";
})*/



//#4: How can we used muliple property: values in the css method?

//#5: Chain jQuery function calls
$("input").css("width","200px")
$("input").attr("placeholder","My placeholder");
$("input").before("<label>My input </label>");
