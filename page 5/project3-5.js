
let checkButton = document.getElementById('checkbutton');

function checkCode(){

var One = document.getElementById('first').value;
var Two = document.getElementById('second').value;
var Three = document.getElementById('third').value;


	if (One == '9'&& Two == '6' && Three == '8'){
		const congrats = document.getElementById('result');
		congrats.className = 'congrats';
		congrats.innerHTML = 'Congratulations!';
		console.log('correct' + One);
	} else{
		const tryagain = document.getElementById('result')
		tryagain.className = 'tryagain';
		tryagain.innerHTML = 'Try Again!';
		console.log('tryagain');
		}
}


checkButton.addEventListener('click',checkCode);// JavaScript Document