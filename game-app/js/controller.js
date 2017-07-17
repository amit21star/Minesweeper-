canvas.addEventListener('click', function(e){
	var x = e.clientX,
		y = e.clientY;
		
	var modelCoordinates = viewToModel(x,y);

	openBlock(modelCoordinates.x, modelCoordinates.y);
render();	
})