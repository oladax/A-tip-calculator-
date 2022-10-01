// Global access(this means all of our functions
//will have accces to the inputs and divs grabbed by ID) to all inputs and divs//
// the ID for billtotalinput = user input for bill total
const billinput = document.getElementById("bill-inputs");
// the ID for tipinput = user input for tip
const tipinput = document.getElementById("tipinput");



//number of people divided by percentage grabbed by id
let numberofpeoplediv = document.getElementById("numberofpeoplediv");
//Get number of people from number of people div
//numberofpeoples.innerText = Number('2')
let numberofpeople = Number(numberofpeoplediv.innerText);


//the per person total of the bill grabbbed by id
const perperson = document.getElementById("perpersontotal");

// the calculate button,calculate the total bill per perosn
const calculatebill = () => {
  // get the tip from user and convert it into number
  const bill = Number(billinput.value);

  // get the tip from user and  convert it into a percentage divided by 100
  const tipPercentage = Number(tipinput.value) / 100;

  //get the total tip amount
  const tipamount = bill * tipPercentage;

  //calculate the total (tip amount + bill)
  const total = tipamount + bill;
  

  //calculate the per person total (total divided by number of people)
  const perpersontotal = total / numberofpeople
  

  //update the perpersontotal on DOM and show it to user

   perperson.innerText = `$${perpersontotal.toFixed(2)}`

   
};

//decreasepeople function is meant to split the bill between more people

function increasepeople() {
  if (numberofpeople >= 50){
    return true
  }
  //increment the  amount of people
  numberofpeople +=1
  // update the DOM with the new number of people 
  numberofpeoplediv.innerText = numberofpeople 
  //calculate the bill based on the new number of people
  calculatebill();
}

////decreasepeople function is meant to split the bill between more people
function decreasepeople() {

  //guard clause
  // if amount is 1 or less simply return
  //(a.k.a you cants decrease the number of people below 1)
  if (numberofpeople <=  1){
    alert('hey! you cannot have less than one.')
    return true
  }
//increment the  amount of people
  numberofpeople -=1
  // update the DOM with the new number of people
  numberofpeoplediv.innerText = numberofpeople
  calculatebill();
}
