/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
    let bm = weight/(height**2)
    if (bm <= 18.5) {
        return "Underweight"
    } else if (bm <= 25) {
        return "Normal"
    } else if (bm <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

const bmi = (w, h, bmi = w/h/h) => bmi <= 18.5 ? "Underweight":
bmi <= 25 ? "Normal":
bmi <= 30 ? "Overweight": "Obese";

function bmi(weight, height) {
 let bmi = weight / (height * height);
 switch(true){
   case bmi <= 18.5:
     return "Underweight";
   case bmi <= 25.0:
     return "Normal";
   case bmi <= 30.0:
     return "Overweight";
   case bmi > 30:
     return "Obese";
  }
}