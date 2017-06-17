
// button button1
function myFunction() {
    document.getElementById("button1");
    alert('Salaud');
}


// end button

// start button2 form
function myFunction2() {
	document.getElementById("button2");
	alert("Un peu de respect");
}
// end button2 form


// button times
function times(){
	var date = new Date();
	alert(date);	
} 
// end button times


// compteur//
var compte = 0;

function chrono()
{
  document.getElementById("chrono").innerHTML = "vous avez passé "+" "+compte+ " "+"s" ;
  compte++;
}

function start()
{
  setInterval(chrono, 1000);

}
window.onload = start

// end compteur//





