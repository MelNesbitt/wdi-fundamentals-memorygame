const cards = [ 
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];
let playerScore = 0;

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('reset').addEventListener('click', resetBoard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function flipCard() {
	/*use getAttribute to identify the index of the card that has been clicked and store it in variable
	*/
	const cardIndex = this.getAttribute('data-id');
	/*we use the clicked card index to get the keys and values from the clicked card
	*/
	const keysAndValues = cards[cardIndex];
	/*Now we have the information from each card based on its index. What we want is the card image 
	*/
	const imagePath = keysAndValues['cardImage'];
	const cardRank = keysAndValues['rank'];
	/*Now we have the card image. We have to set the card's source attribute to reflect the image path
	*/
	this.setAttribute('src', imagePath);
	/*print the rank of the card to the console
	*/
	console.log("User flipped " + cardRank);
	cardsInPlay.push(cardRank);
	checkForMatch();
}

function checkForMatch() {
	/*First we must make sure that two cards have been clicked.
	Then, we need to determine whether card 1 and card 2 have the same rank.
	If they do, the user should receive a pop up telling them they're found a match.
	Otherwise, they should receive a pop up letting them know they have not made a match.*/
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			/*now, we want to record player's score. Player scores 1 point for a match, and 
			1 point is subtracted for no match*/		
			playerScore++; 
			alert(`You got a match! User's score is ${playerScore} .`);
		} else {
			playerScore--;
			alert(`Sorry, try again. User's score is ${playerScore} .`);
		}
	}
}			

function resetBoard() {
	/*in order to reset the board, we need to add a click event that will empty the array cardsInPlay.
	We also need to clear and reset the game board*/
	const board = document.getElementById('game-board');
	board.innerHTML = "";
	cardsInPlay = [];
	createBoard();
}

createBoard();







