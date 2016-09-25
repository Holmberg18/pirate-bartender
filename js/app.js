
	var Bartender = function(strong,salty,bitter) {
		this.strong = strong;
		this.salty = salty;
		this.bitter = bitter;
    
};

	var Ingredients = function(){
		this.strong = ['Glug of rum', 'slug of whisky', 'splash of gin'];
		this.salty = ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
		this.bitter = ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'];
	
	};
	
	var cocktail = {
		"Glug of rum and splash of tonic" : "Fluffy1 Chinchilla",
		"slug of whisky and Olive on a stick" : "Fluffy2 Chinchilla",
		"salt-dusted rim and twist of lemon peel" : "Fluffy3 Chinchilla",
		"slug of whisky and rasher of bacon" : "Fluffy4 Chinchilla",
		"splash of gin and Olive on a stick and splash of tonic" : "Fluffy5 Chinchilla"
		
		
	}

	Bartender.prototype.showMyDrink = function(){
		var finalDrink = '';
		var newDrink = new Ingredients();
		var thisBartender = this;
		Object.keys(this).forEach(function(key,index){
			var preference = thisBartender[key];
			if(preference) {
				// console.log(newDrink[key]);
				var options = newDrink[key];
				var rand = Math.floor(Math.random() * 3);
				console.log("Rand is "+rand);
				if(finalDrink){
				finalDrink += " and " + options[rand];
				}
				else 
				{finalDrink = options[rand];}
				
			} 
			
			
		});
		return cocktail[finalDrink];
	};
	
	var Questions = function() {
		this.strong = '<p>Do ye like yer drinks strong?</p>';
		this.salty = '<p>Do ye like it with a salty tang?</p>';
		this.bitter = '<p>Are ye a lubber who likes it bitter?</p>';
		
		
	};
	
	Questions.prototype.showQuestion = function(bartender) {
			var questionObject = this;
			var choices = ['strong','salty','bitter'];
			Object.keys(this).forEach(function(value,index){
				 // console.log(value);
				 // console.log(index);
				
				var question = questionObject[value];
				console.log(question);
				$(".bartender-question").append(question);
				$(".bartender-question").append("<span class='flow-text'><a class='waves-effect waves-light btn yes-"+choices[index]+"'>Yes</a><a class='waves-effect waves-light btn no-"+choices[index]+"'>No</a></span>");
			});
				console.log(Object.keys(this));
			  // $("bartender-question").append().html();
			  
			$(".yes-strong").click(function(){
				bartender.strong = true;		
			});
			$(".yes-salty").click(function(){
				bartender.salty = true;		
			});
			$(".yes-bitter").click(function(){
				bartender.bitter = true;		
			});
			$(".no-strong").click(function(){
				bartender.strong = false;		
			});
			$(".no-salty").click(function(){
				bartender.salty = false;		
			});
			$(".no-bitter").click(function(){
				bartender.bitter = false;		
			});
			
		};
		
		var bob = new Bartender();
		var questionList = new Questions();

$(document).ready(function(){
	

		// $(".new-drink").click(function(){
			
			// var newDrink = new Bartender();
			
		// });
		
		questionList.showQuestion(bob);
		
			$("#get-drink").click(function(){
			
			// var newDrink = questionList.showMyDrink(); 
				
				var myDrink = bob.showMyDrink();
				console.log(myDrink);
			
		});
		
	
		
	
		
		return false;
});



