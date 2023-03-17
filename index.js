let cards= []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=   document.getElementById("message-el")

console.log("messageEl")
console.log(sum)

let sumBtn = document.querySelector("#sum")
let cardsView = document.querySelector("#cards")

let player={
	name:"karthick: ",
	points:45
}

let playerEl = document.getElementById("player")
playerEl.textContent = player.name + "$" + " "+ player.points

function getRandomCard (){
	let randomNumber = Math.floor(Math.random() * 13 + 1) 
	if(randomNumber === 1){
		return 11
	}else if(randomNumber > 10){
		return 10
	}else{
		return randomNumber
	}


}

function start(){
	isAlive = true
	let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum  = firstCard + secondCard
let cards = [firstCard, secondCard]
render()

}


function render(){
	sumBtn.textContent = "Sum : " + sum
	cardsView.textContent = "Cards: "  
	for(let i = 0; i < cards.length; i++){
		cardsView.textContent += cards[i] + " "
	}

if( sum < 21){
	message ="do  you want to take another card?😊"
}
else if (sum === 21) {
	message="woah!you got a blackjack😍"
	hasBlackJack = true
}else {
message="you are out of the game😥"
	isAlive = false
}
messageEl.textContent = message

}

function newCard(){

	console.log("Drawing a new Card from the deck")
	let card = getRandomCard()
	sum += card
	cards.push(card)
	console.log(cards)
	render()


}
