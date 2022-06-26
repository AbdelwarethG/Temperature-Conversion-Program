


document.getElementById("convertBtn").onclick = function () {

	let temp;

	if(document.getElementById("cBtn").checked)
	{
		temp = document.getElementById("temperature").value ;
		temp = Number(temp);
		temp = toCelsius(temp);
		document.getElementById("conversion").innerHTML = `${temp} °C`;
	}
	else if (document.getElementById("fBtn").checked)
	{
		temp = document.getElementById("temperature").value ;
		temp = Number(temp);
		temp = toFahrenheit(temp);
		document.getElementById("conversion").innerHTML = `${temp} °F`;
	}
	else
	{
		document.getElementById("conversion").innerHTML =" Please select a unit ";
	}



}




function toCelsius(temp)
{
	return (temp - 32)* (5/9);
}
function toFahrenheit(temp)
{
	return temp * 9 / 5 + 32;
}

