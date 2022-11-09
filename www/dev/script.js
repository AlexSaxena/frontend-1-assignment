function getContentFromApi(filename, selector) {
  fetch("http://localhost:4000/api/content/" + filename)
    .then((response) => (response = response.json()))
    .then((content) => {
      console.log(content);
      document.querySelector(selector).innerHTML = marked.parse(content.data); // marked är ett externt bibliotek som hanterar markdown filer (.md)
      hljs.highlightAll(); // hljs (highlight.js) ger syntax-highlight i <code>-taggar.
    });
}
//getContentFromApi("ovningar1-10.md", '[data-source="content"]');

// -------------------------------------------------------------------------

let allUsersJSON;

// Fetches all the users and parses them.
function getUsers() {
  fetch("http://localhost:3000/api/users/")
    .then((response) => (response = response.json()))
    .then((users) => {
      console.log("User JSON promise", users);
      console.log("User JSON typeOf ->", typeof users);
      allUsersJSON = users;
    });
}
// -------------------------------------------------------

// Selectors
let outputContainer = document.querySelector(".container-output");
let btnClear = document.querySelector(".clear-table-btn");
let myTable = document.querySelector("#table");
let selectSortOptions = document.querySelector("#sort-selector");
let btnSorterSelect = document.querySelector(".btn-select-sorter");
let isTable = true;
console.log("Table Bool", isTable);

// Header Titles
let headers = ["Förnamn", "Efternamn", "Discord", "Personlighetstyp"];

// Filter for JSon Objects
const userFilter = ({ firstname, lastname, discord, personalityType }) => ({
  firstname,
  lastname,
  discord,
  personalityType,
});

// EventListeners
btnClear.addEventListener("click", clearTable);
btnSorterSelect.addEventListener("click", () => {
  if (selectSortOptions.value == "none") {
    console.log("None Selected");
  } else if (selectSortOptions.value == "all") {
    clearTable();
    generateTable();
  } else {
    clearTable();
    let sortedArray = sortByColour(selectSortOptions.value);
    generateTable(sortedArray);
  }
});

// Functions
// Clears Table on DOM
function clearTable() {
  isTable = true;
  while (myTable.firstChild) {
    myTable.removeChild(myTable.lastChild);
  }
}

// Generates new table on DOM
function generateTable(userObjects = allUsersJSON) {
  if (userObjects < 1) return console.log("None Selected");
  if (isTable) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
      let header = document.createElement("th");
      let textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    userObjects.forEach((aUser) => {
      let row = document.createElement("tr");
      let newUser = userFilter(aUser);

      Object.values(newUser).forEach((text) => {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    myTable.appendChild(table);
    isTable = false;
  }
}

// Sorts JSON into Array based on Colour then Returns desired Array
function sortByColour(colour = "rest") {
  console.log("sortByColours", colour);
  let userArrayRed = [];
  let userArrayYellow = [];
  let userArrayBlue = [];
  let userArrayGreen = [];
  let userArrayRest = [];

  for (const key in allUsersJSON) {
    if (Object.hasOwnProperty.call(allUsersJSON, key)) {
      const element = allUsersJSON[key];
      if (element.personalityType === "gul") {
        userArrayYellow.push(element);
      } else if (element.personalityType === "blå") {
        userArrayBlue.push(element);
      } else if (element.personalityType === "röd") {
        userArrayRed.push(element);
      } else if (element.personalityType === "grön") {
        userArrayGreen.push(element);
      } else {
        userArrayRest.push(element);
      }
    }
  }

  switch (colour) {
    case "red":
      return userArrayRed;
    case "blue":
      return userArrayBlue;
    case "yellow":
      return userArrayYellow;
    case "green":
      return userArrayGreen;
    default:
      return userArrayRest;
  }
}

getUsers();
