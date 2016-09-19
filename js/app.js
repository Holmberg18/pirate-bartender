var strong=false;
var tang=false;

	var Bartender = function() {
    $("bartender-question").append().html("<p>Do ye like yer drinks strong?</p>");
	$("bartender-question").append().html("<span class='flow-text'><a class='waves-effect waves-light btn yes-strong'>Yes</a><a class='waves-effect waves-light btn no-strong'>No</a></span>");
	$(".yes-strong").click(function(){
		strong = true;		
	});
	$("bartender-question").html("");
	$("bartender-question").append().html("<p>Do ye like it with a salty tang?</p>");
	$("bartender-question").append().html("<span class='flow-text'><a class='waves-effect waves-light btn yes-tang'>Yes</a><a class='waves-effect waves-light btn no-tang'>No</a></span>"
	$(".yes-tang").click(function(){
		tang = true;		
	});
};

$(document).ready ( function() {
	

		$(".new-drink").click(function(){
			
			var newDrink = new Bartender();
			
		});
	
		
		return false;


// Musician.prototype.solo = function(length) {
    // var solo = "";
    // for (var i=0; i<length; i++) {
        // solo += this.sounds[i % this.sounds.length] + " ";
    // }
    // console.log(solo);
// };

// var Guitarist = function() {
    // Musician.call(this, ['Twang', 'Thrumb', 'Bling']);
    // this.strings = 6;
// };
// Guitarist.prototype = Object.create(Musician.prototype);
// Guitarist.prototype.constructor = Guitarist;

// Guitarist.prototype.tune = function() {
    // console.log('Be with you in a moment');
    // console.log('Twoning sproing splang');
// };

// var Bassist = function() {
    // Musician.call(this, ['Boink', 'Bow', 'Boom']);
    // this.strings = 4;
// };
// Bassist.prototype = Object.create(Musician.prototype);
// Bassist.prototype.constructor = Bassist;

// var nigel = new Guitarist();
// nigel.tune();
// nigel.solo(8);

// var derek = new Bassist();
// derek.solo(4);


});



