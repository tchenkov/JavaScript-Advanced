function personalBmi(name, age, weight, height) {
    function calcBmi(weight, height) {
        height /= 100;
        return Math.round(weight / (height * height));
    }

    function getStatus(bmi) {
        if (bmi < 18.5){
            return 'underweight';
        }

        if (bmi < 25){
            return 'normal';
        }

        if (bmi < 30){
            return 'overweight';
        }

        return 'obese';
    }

    let bmi = calcBmi(weight, height);
    let status = getStatus(bmi);

    let preliminaryEvaluation  = {
        name: name,
        personalInfo: {
            age: Number(age),
            weight: Number(weight),
            height: Number(height)
        },
        BMI: bmi,
        status: status
    };

    if (bmi >= 30){
        preliminaryEvaluation['recommendation'] = 'admission required';
    }

    return preliminaryEvaluation;
}

// function tests
console.log(personalBmi('Peter', 29, 75, 182));
console.log();
console.log(personalBmi('Honey Boo Boo', 9, 57, 137));