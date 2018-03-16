let result = (function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(card, suit){
            this.face = card;
            this.suit = suit;
        }

        set face(card){
            if (!cards.includes(card)){
                throw new Error('error');
            }
            this._card = card;
        }

        get face(){
            return this._card;
        }

        set suit(suit){
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)){
                throw new Error('error');
            }
            this._suit = suit;
        }

        get suit(){
            return this._suit;
        }

        toString(){
            return this._card + this._suit;
        }
    }

    return {Suits: Suits, Card: Card};
})();

let Suits = result.Suits;
let Card = result.Card;

let card = new Card("2",Suits.SPADES);
console.log('' + card);

// let card2 = new Card("1",Suits.DIAMONDS);
// let card3 = new Card("A",Suits.Pesho);
// let card4 = new Card("A",'hearts');