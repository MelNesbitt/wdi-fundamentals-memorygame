/*console.log("Everything running smoothly!");
let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/
const cards = ["queen", "queen", "king", "king"]
const cardsInPlay = []

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
};

function flipCard(cardId) {	
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

checkForMatch();

};

flipCard(0);
flipCard(2);




