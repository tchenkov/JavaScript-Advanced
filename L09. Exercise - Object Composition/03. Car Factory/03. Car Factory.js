function carFactory(request) {
    let car = {};

    car['model'] = request.model;
    car['engine'] = getCarEngine(request);
    car['carriage'] = getCarCarriage(request);
    car['wheels'] = getCarWheels(request);

    return car;

    function getCarEngine(request) {
        if (request.power <= 90) {
            return {power: 90, volume: 1800};
        } else if (request.power <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    }

    function getCarCarriage(request) {
        let carriages = {
            hatchback: {type: 'hatchback'},
            coupe: {type: 'coupe'}
        };
        let carriage;
        switch (request.carriage) {
            case 'hatchback':
                carriage = carriages.hatchback;
                break;
            case 'coupe':
                carriage = carriages.coupe;
                break;
            default:
                return;
        }

        carriage['color'] = request.color;
        return carriage;
    }

    function getCarWheels(request) {
        let wheelSize = request.wheelsize % 2 === 0 ? request.wheelsize - 1 : request.wheelsize;
        return new Array(4).fill(wheelSize);
    }
}

// function tests
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log();
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));