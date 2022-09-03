const showOnPage = function (text) {
  let newParagraph = document.createElement("p")
  newParagraph.innerHTML = text
  let outputDiv = document.getElementById("output")
  outputDiv.append(newParagraph)
}

showOnPage('My code is based on the daily decision of wether or not I can go get some coffee from Starbucks before Work')
showOnPage('This is dependent on wether or not I have enough money and wether or not I woke up late.')
showOnPage ('These are my Global Variables: iWokeUpLate and moneyInbank.')

showOnPage ('My local variable would be my starbucks order if I did have enough money in my bank and if i didnt wake up late.')
showOnPage ('My local variable is made of two string variables - my order and my girlfriends order')

showOnPage ('My change in the global variables would either print a message saying : I am so broke I cant even afford Starbucks, I cant get Starbucks because Im going to be late!, or Im getting starbucks')
showOnPage ('If I were to get Starbucks it would print my starbucks order')