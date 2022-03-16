
	$(document).ready(function() {
  	$('.example').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.pc').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.foto2').magnificPopup({type:'image'});
});

$(document).ready(function() {
	$('.form').submit(function(event){
		event.preventDefault();

		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val(" ");
			alert("Успешно отправлено!");
			$("form").trigger("reset");
		});
		return false;
	});

});	
