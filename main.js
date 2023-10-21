// to do:
// message displays CURRENT avg starting price
// new freelancer pops up every few seconds
// avg starting price updated accordingly

// *******************************************************************************

// ***************JS SQUARE********************

  const squareDisplay = document.createElement('div');
  squareDisplay.classList.add('squareDisplay');
  const body = document.querySelector('body');
  body.appendChild(squareDisplay);

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

  const title = document.createElement("h1");
    title.textContent = "Freelancer Forum";
      body.append(title);

  const titleTwo = document.createElement("h2");
    titleTwo.textContent = "The average starting price is $30";
      body.append(titleTwo);

  const aF = document.createElement("h3");
    aF.textContent = "Available Freelancers"
      body.append(aF);

  const mainText = document.createElement("div")
    mainText.textContent = "Name Occupation Starting-Price"
      body.append(mainText);

  setInterval(() => {
      console.log('Tick')
      }, 1000)
    


  // initial array of freelancers




// freelancers display


// call function to render initial fl data


// function to generate new fl data
    // called in an interval


// function to calculate avg start price
    // called in interval


