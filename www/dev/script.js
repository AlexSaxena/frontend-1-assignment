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
let allUsersJSON;

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
let headers = ["FirstName", "LastName", "Discord", "Personality"];

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
function clearTable() {
  isTable = true;
  while (myTable.firstChild) {
    myTable.removeChild(myTable.lastChild);
  }
}

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
  // console.log("Blå Array", userArrayBlue);
  // console.log("Gul Array", userArrayYellow);
  // console.log("Grön Array", userArrayGreen);
  // console.log("Röd Array", userArrayRed);
  // console.log("rest Array", userArrayRest);

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
