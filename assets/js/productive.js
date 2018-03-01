$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		var userToDoText = $(this).val();

		$("ul").append("<li><span><i class='fa fa-minus-circle'></i></span> " + userToDoText + "</li>");
		$(this).val("");
	}
});


$("h1").on("click", ".fa-pencil", function(){
	$("input[type='text']").fadeToggle();
})