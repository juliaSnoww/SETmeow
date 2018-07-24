function shuffle(array_cards) {
    var currentIndex = array_cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array_cards[currentIndex];
        array_cards[currentIndex] = array_cards[randomIndex];
        array_cards[randomIndex] = temporaryValue;
    }

    return array_cards;
}

