
// button search
function myFunction() {
    document.getElementById("button1");
    alert('Salaud');
}
// end button


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





