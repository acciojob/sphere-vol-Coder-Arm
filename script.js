function volume_sphere(e) {
  //Write your code here
	e.preventDefault();
  let radius = document.getElementById("radius").value;
  let vol = document.getElementById("volume");
  // if (radius.length == 0) vol.value = "NaN";
  for (let ele of radius) {
    if (ele >= "0" && ele <= "9") {
    } else {
      vol.value = "NaN";
      break;
    }
  }

  if (vol.value !== "NaN")
    vol.value = ((4 * Math.PI * radius * radius * radius) / 3).toFixed(4);
}

window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
