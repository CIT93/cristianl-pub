const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

//let iWokeUpLate = false
//let moneyInBank = 500

//if (iWokeUpLate && moneyInBank <=20) {
//    console.log ('I am so broke I cant even afford Starbucks')
//} 

//else if (iWokeUpLate) {
//    console.log ('I cant get Starbucks because Im going to be late!')
//    }

//else {
//    console.log ('Im getting starbucks')
//    let whatILike = ('Caramel Frappuccino')
//    let whatSheLikes = ('Green Matcha Tea')
//    let myorder = (whatILike + '&' + whatSheLikes)    
//    console.log (myorder) 
//}

let canIGetStarbucks = function (iWokeUpLate = false, moneyInBank){
    if (iWokeUpLate && moneyInBank <=20) {
        message = ('I am so broke I cant even afford Starbucks!')
    } 
    
    else if (iWokeUpLate) {
        message = ('I cant get Starbucks because Im going to be late!')
        }    
    else {
        message = ('Im getting starbucks')
    }

    return (message)
}

let finalMessage = canIGetStarbucks(true, 10)

console.log (finalMessage)


showOnPage('My Globa Variables are canIGetStarbucks and finalMessage')

showOnPage('My local variables are iWokeUpLate, moneyInTheBank, and message')

showOnPage('I creted a function where the canIGetStarbucks variable is a function of me waking up late or not and the money in my bank account. I then used if, else if, and else from my previous assignment code for it to return me the message that i wanted printed. Lastly, I set the final message equal to canIgetStarbucks and put in the values for true/false and dolllar amount and printed it. ')