function getBMI() {
  let height = parseFloat(document.getElementById("form_height").value / 100);
  let weight = parseInt(document.getElementById("form_weight").value);
  let bmi = weight / height ** 2;
  let bmi_rounded = bmi.toFixed(2);
  let report = bmiReport(bmi_rounded);
  document.getElementById(
    "exactbmi"
  ).textContent = `Your BMI is ${bmi_rounded}`;
  document.getElementById("bmireport").textContent = bmiReport(bmi);
}

function bmiReport(bmi) {
  if (bmi < 18.5) {
    return "you are underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "you have normal weight";
  } else {
    return "you are overweight";
  }
}
