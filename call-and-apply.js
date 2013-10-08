// just copy this function into your utility.js
// don't try to understand this until you have jedi powers
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


$(document).ready(function(){

	// Declare variables
	var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
	var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
	var person3 = {firstName: 'Gollum', age: 589, color: 'green'};
	var personList = [person1, person3];



	// Define functions
	var sayHello = function() {
	 	alert('Hello, ' + this.firstName);
	};


	var greetOneAnother = function(a, b) {
	 	alert("{0}, meet {1} and {2}".supplant([this.firstName, a.firstName, b.firstName]));
	};


	var clickButton = function() {
		 	var buttonClicked = $(this).text();
			$('#buttontext').text(buttonClicked);
	};



	// Utilize Call & Apply & Click button
	sayHello.call(person1);

	greetOneAnother.apply(person2, personList);

	clickButton.call($('.btn-primary'));

	$('button').on('click', clickButton);


});
