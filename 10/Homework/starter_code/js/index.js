//Run the function when the document is ready

$(document).ready(function() {

//When a user submits the form, get the input field value
//

//store the value of the html element input inside of the inputField variable

//Prevent a form submission using the event.preventDefault() function

//Use $.on(submit) or $.click to figure out when the user clicks the "submit" button

//Store the value of id city-type in a variable called city



$("#submit-btn").click(function(event) {
	var city = $('input').val();


		event.preventDefault();
      
	

	if (city === 'New York' || city === 'NYC' || city === 'New York City') {
		$('body').addClass('nyc');


	}

	else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
		$('body').addClass('sf');

	}
	
	else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
		$('body').addClass('la');
	}

	else if (city === 'Austin' || city === 'ATX') {
		$('body').addClass('austin');
	}

	else if (city === 'Sydney' || city === 'SYD') {
		$('body').addClass('sydney');
	}

	else {
		$('body').removeClass();
	}

;



	});

});





	
