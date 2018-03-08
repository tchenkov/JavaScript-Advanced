function printDeckOfCards(cards) {
    let result = [];
    for (let card of cards) {
        let power = card.substring(0, card.length - 1);

        let suit = card.substring(card.length - 1);
        try {
            result.push(makeCard(power, suit));
        } catch (e) {
            console.log('Invalid card: ' + card);
            return;
        }
    }

    console.log(result.join(' '));

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
}

// function tests

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

