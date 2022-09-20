const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };
//ShowOnPage Function


// I made an object contained the name and size of my starbucks order and also a method that will return me my order based on what time i woke up and if I have money in my account.
// The current time variable: For simplicity I am assuming it is AM. Any PM values would have to be used in 24 hr time.
let starbucksOrder = { 
    name: 'Caramel Frappe',
    size: 'Small',
    canIgetSomeStarbucks: function (currentTime, moneyInBankAccount) {
    if (currentTime <= 9 && moneyInBankAccount >= 25) {
        return (`${starbucksOrder.size}`+ ' ' + `${starbucksOrder.name}`)}
        else {
            return ('Cant get Starbucks :(')
            }
    }
}

console.log(starbucksOrder.canIgetSomeStarbucks(2,30))
showOnPage(starbucksOrder.canIgetSomeStarbucks(2,30))
