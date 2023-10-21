function addArray() {
  const string1 = { name: "Alice", price: 30, occupation: "writer" }
  body.appendChild(string1);
}


setInterval(() => {
  console.log('Tick')
}, 1000)


const squareDisplay = document.createElement('div');
squareDisplay.classList.add('squareDisplay');

const body = document.querySelector('body');
body.appendChild(squareDisplay);



// to do:
// message displays CURRENT avg starting price
// new freelancer pops up every few seconds
// avg starting price updated accordingly

// *******************************************************************************

// array of freelancers
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Sarah", price: 85, occupation: "technician" },
    { name: "Don", price: 100, occupation: "mechanic" },
    { name: "Spark", price: 120, occupation: "adv mechanic" },
    { name: "Lily", price: 140, occupation: "software dev" },
    { name: "Anya", price: 150, occupation: "grad professor" },
  ];


  // initial array of freelancers




// freelancers display


// call function to render initial fl data


// function to generate new fl data
    // called in an interval


// function to calculate avg start price
    // called in interval


