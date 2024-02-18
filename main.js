// to do:
// message displays CURRENT avg starting price
// new freelancer pops up every few seconds
// avg starting price updated accordingly

const names = ["Alice", "Bob", "Carol", "Lily", "Trevor", "Liam", "Zoe"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Artist",
  "Nail Tech",
  "Renovator",
];

const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];
const maxLength = 15;


const addFreelancerIntervalId = setInterval(addFreelancer, 1000);


render();


function render() {
 
  const averagePrice = document.querySelector("#average-price");
  const tableBody = document.querySelector("#table-body");

  // Create an array of row elements from the freelancers array
  const rowElements = freelancers.map((freelancer) => {
    // Create a new row for each freelancer
    const newRow = document.createElement("tr");
  
    const { name, price, occupation } = freelancer;
    // Create "td" elements for each detail & add the text
    const nameDetail = document.createElement("td");
    nameDetail.innerText = name;

    const occupationDetail = document.createElement("td");
    occupationDetail.innerText = occupation;

    const priceDetail = document.createElement("td");
    priceDetail.innerText = `$${price}`;

    // Append all the "td" elements to the row
    newRow.append(nameDetail, occupationDetail, priceDetail);
    // Return the newly created row & its child elements
    return newRow;
  });

  // Add the freelancer rows to the table body
  tableBody.replaceChildren(...rowElements);

  // The DOM is updated to reflect the average starting price.
  const newAverage = calculateAveragePrice();
  averagePrice.innerText = `$${newAverage}`;
}

/* Calculate average price */

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (subtotal, current) => subtotal + current.price,
    0
  );
 
  return Math.round(total / freelancers.length);
}

/* Add a random freelancer */

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100);
  // Create new freelancer object and push into the freelancers array
  freelancers.push({ name, price, occupation });

  // Call render() to update the DOM with the newly added freelancer
  render();

  // Clear setInterval when freelancers length is equal to max length
  if (freelancers.length === maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}