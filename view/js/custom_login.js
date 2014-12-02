// JavaScript Document
 jQuery(function($) {
	$(document).ready( function() {
	  
	 $('#div_login').hide();
	 $('#div_regester').show(); 
	 
	 //event
	 $('#ln').click(function(){
		 	$('#div_regester').hide(); 
			$('#div_login').show();
		 });
		 
	$('#re').click(function(){
			$('#div_regester').show(); 
			$('#div_login').hide();
		});
	 
  });
});