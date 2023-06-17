
function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let vol = document.getElementById("volume");
	vol.value = 4*Math.PI*radius*radius*radius/3;
} 

window.onload = document.getElementById('MyForm').onclick = volume_sphere;
