function shuffle(array_cards) {
    var currentIndex = array_cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array_cards[currentIndex];
        array_cards[currentIndex] = array_cards[randomIndex];
        array_cards[randomIndex] = temporaryValue;
    }

    return array_cards;
}

