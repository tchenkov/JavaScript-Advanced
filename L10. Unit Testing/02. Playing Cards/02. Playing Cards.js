function makeCard(power, suit) {
    const powers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {S: '♠', H: '♥', D: '♦', C: '♣'};

    if (!powers.includes(power) || !suits.hasOwnProperty(suit)) {
        throw new Error('ivan');
    }

    return {
        power: power,
        suit: suits[suit],
        toString: function () {
            return this.power + this.suit;
        }
    };
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));