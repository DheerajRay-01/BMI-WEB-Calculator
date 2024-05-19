let form = document.querySelector("form");
function bmictg(bmi) {
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else {
    category = "Overweight";
  }

  return category;
}

form.addEventListener("submit", function (f) {
  f.preventDefault();
  let h = parseInt(document.querySelector("#inputHight").value);
  let w = parseInt(document.querySelector("#inputWeight").value);
  let result = document.querySelector("#result");
  let e = 0;
  if (h < 0 || h === "" || isNaN(h)) {
    result.textContent = "Please Enert Valid Hight";
    e = 1;
  } else if (w < 0 || w == "" || isNaN(w)) {
    if (e) {
      result.textContent = " Please Enert Valid Hight & Weight";
    } else {
      result.textContent = " Please Enert Valid Weight";
    }
  } else {
    let hm = h / 100;
    let bmi = (w / (hm * hm)).toFixed(1);
    result.textContent = `Your BMI = ${bmi}  ( ${bmictg(bmi)} )`;
    document.querySelector("#submit").textContent = "RESET";
  }
});
document.querySelector("#submit").addEventListener("click", function (e) {
  if (e.target.textContent == "RESET") {
    location.reload();
  }
});
