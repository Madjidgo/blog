
function myFunction() {
    document.getElementById("button1");
    alert('Salaud');
}

function times(){
	var date = new Date();
	alert(date);
	window.onload = start() ;
} 

// compteur//
var compte = 0;

function chrono()
{
  document.getElementById("chrono").innerHTML = "vous avez passé "+" "+compte ;
  compte++;
}

function start()
{
  setInterval(chrono, 1000);

}
window.onload = start

// end compteur//





