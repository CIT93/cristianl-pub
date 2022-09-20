const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };
//ShowOnPage Function

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
