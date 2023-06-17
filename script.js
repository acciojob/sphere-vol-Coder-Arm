
function volume_sphere() {
    //Write your code here
	let radius = Number(document.getElementById("radius").value);
	let vol = document.getElementById("volume");
	vol.value = Number(4*Math.PI*radius*radius*radius/3);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
