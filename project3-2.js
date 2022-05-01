let greenCursor = document.getElementById('green-cursor');

let myBody = document.querySelector('body');

myBody.addEventListener('mouseenter', function(event){
	greenCursor.style.display = "block";
	greenCursor.style.left = event.pageX + 'px';
	greenCursor.style.top = event.pageY+ 'px';
});

myBody.addEventListener('mousemove', function(event){
	greenCursor.style.display = "block";
	greenCursor.style.left = event.pageX + 'px';
	greenCursor.style.top = event.pageY+ 'px';
});