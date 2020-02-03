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
	let cardOne = cards[0];
	let cardTwo = cards[1];
	let cardThree = cards[2];
	let cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]){
	alert("Sorry, try again"); 
 }
}	
