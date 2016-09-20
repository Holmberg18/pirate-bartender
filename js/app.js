var strong=false;
var salty=false;
var bitter=false;

	var Bartender = function() {
    $(".bartender-question").append().html("<p>Do ye like yer drinks strong?</p>");
	$(".bartender-question").append()("<span class='flow-text'><a class='waves-effect waves-light btn yes-strong'>Yes</a><a class='waves-effect waves-light btn no-strong'>No</a></span>");
	$(".yes-strong").click(function(){
		strong = true;		
	});
	$(".bartender-question").html("");
	$(".bartender-question").append().html("<p>Do ye like it with a salty tang?</p>");
	$(".bartender-question").append().html("<span class='flow-text'><a class='waves-effect waves-light btn yes-tang'>Yes</a><a class='waves-effect waves-light btn no-tang'>No</a></span>");
	$(".yes-tang").click(function(){
		tang = true;		
	});
};

	var Ingredients = function(){
		this.strong = ['Glug of rum', 'slug of whisky', 'splash of gin'];
		this.salty = ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
		this.bitter = ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'];
	
	};

	Ingredients.prototype.showMyDrink = function(strong,salty,bitter){
		
		
		
	};
	
	var Questions = function() {
		this.strong = '<p>Do ye like yer drinks strong?</p>';
		this.salty = '<p>Do ye like it with a salty tang?</p>';
		this.bitter = '<p>Are ye a lubber who likes it bitter?</p>';
		
		
	};
	
	Questions.prototype.showQuestion = function() {
			var questionObject = this;
			var choices = ['strong','salty','bitter'];
			Object.keys(this).forEach(function(value,index){
				 console.log(value);
				 console.log(index);
				
				var question = questionObject[value];
				console.log(question);
				$(".bartender-question").append(question);
				$(".bartender-question").append("<span class='flow-text'><a class='waves-effect waves-light btn yes-"+choices[index]+"'>Yes</a><a class='waves-effect waves-light btn no-"+choices[index]+"'>No</a></span>");
			});
				console.log(Object.keys(this));
			  // $("bartender-question").append().html();
			  
			$(".yes-strong").click(function(){
				strong = true;		
			});
			$(".yes-salty").click(function(){
				salty = true;		
			});
			$(".yes-bitter").click(function(){
				bitter = true;		
			});
			$(".no-strong").click(function(){
				strong = false;		
			});
			$(".no-salty").click(function(){
				salty = false;		
			});
			$(".no-bitter").click(function(){
				bitter = false;		
			});
		};
		

		
		

	
	var Ingredients = function () {
	 this.strong = ['Glug of rum', 'slug of whisky', 'splash of gin'];
	 this.salty = ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
	 this.bitter = ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'];
	 
		
		
		
	};

$(document).ready(function(){
	

		// $(".new-drink").click(function(){
			
			// var newDrink = new Bartender();
			
		// });
		
		var questionList = new Questions();	
		questionList.showQuestion();
		
		return false;
});



