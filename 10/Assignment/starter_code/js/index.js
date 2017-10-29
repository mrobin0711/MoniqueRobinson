//Run the function when the document is ready

$(document).ready(function() {

//When a user submits the form, get the input field value
//

//store the value of the html element input inside of the inputField variable

//Use $.on(submit) or $.click to figure out when the user clicks the "submit" button

	var cities = [
   	'NYC',
   	'SF',
   	'ATX',
   	'LA',
   	'SYD'
 	];

  $(cities).each(function(i, cityName) {
		$('select').append('<option value="'+cityName+'">'+cityName+'</option>');
	});


	
	$("#submit-btn").click(function(event) {
		var city = $('select').val();
       
//Store the value of id city-type in a variable called city
//
		$('body').attr('class','');



	if (city === 'New York' || city === 'NYC' || 'New York City') {
		$('body').addClass('nyc');


	}

	else if (city === 'San Francisco' || city === 'SF' || 'Bay Area') {
		console.log(city);
		$('body').css('background-image',"url('images/sf.jpg')");

	}
	
	else if (city === 'Los Angeles' || city === 'LA' || 'LAX') {
		$('body').css('background-image',"url('images/la.jpg')");
	}

	else if (city === 'Austin' || city === 'ATX') {
		$('body').css('background-image',"url('images/austin.jpg')");
	}

	else if (city === 'Sydney' || city === 'SYD') {
		$('body').css('background-image',"url('images/sydney.jpg')");
	}

	else {
		$('body').css('background-image',"url('images/citipix_skyline.jpg')");
	}

;


//Prevent a form submission using the event.preventDefault() function

event.preventDefault();

	});

});


//Use $.on(submit) or $.click to figure out when the user clicks the "submit" button




	
