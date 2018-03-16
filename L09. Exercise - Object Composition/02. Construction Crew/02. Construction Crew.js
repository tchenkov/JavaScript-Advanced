function constructionCrew(worker) {
    if (worker.handsShaking){
        drink(worker);
        worker.handsShaking = false;
    }
    
    return worker;
    
    function drink(worker) {
        let amountOfAlcohol = 0.1 * worker.weight * worker.experience;
        worker.bloodAlcoholLevel += amountOfAlcohol;

    }
}

// function tests
console.log(constructionCrew({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));
console.log();
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));
console.log();
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));