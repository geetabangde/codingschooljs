function bmiCalculator(weight, height) {
  return weight / Math.pow(height, 2);
}

console.log(bmiCalculator(69, 1.69).toFixed(2));


//resuable discount calculator for hoc



function discountCalculator(discount) {
    return function (price) {
        return price - (price * discount);
    };
}

    


