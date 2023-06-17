function volume_sphere() {
  //Write your code here
  let radius = document.getElementById("radius").value;
  console.log(typeof radius);
  let vol = document.getElementById("volume");
  if (radius == "") vol.value = "NaN";
  else vol.value = ((4 * Math.PI * radius * radius * radius) / 3).toFixed(4);
}

window.onload = document.getElementById("MyForm").onclick = volume_sphere;
