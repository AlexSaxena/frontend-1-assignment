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

function getUsers() {
  fetch("http://localhost:4000/api/users/")
    .then((response) => (response = response.json()))
    .then((users) => {
      sortByColour(users);

      // console.table(users);
      // console.log(typeof users);

      let newSection = document.querySelector(".newSection");

      users.forEach((user) => {
        for (let key in user) {
          let element = document.querySelector(`[data-source=${key}]`);
          if (element) {
            element.innerText = user[key];
          }
        }
        for (const [key, value] of Object.entries(user)) {
          //console.log(`${key}: ${value}`);
          let newP = document.createElement("p");
          newP.innerText = `${key}: ${value}!`;
          newSection.append(newP);
        }
      });
    });
}

function sortByColour(users) {
  console.log("Inuti sortByColour");
  let userArrayRed = ["Röd"];
  let userArrayYellow = ["Gul"];
  let userArrayBlue = ["Blå"];
  let userArrayGreen = ["Grön"];
  let userArrayRest = ["rest"];

  console.log(users);
  for (const key in users) {
    if (Object.hasOwnProperty.call(users, key)) {
      const element = users[key];
      // console.log("This is an ->" + typeof element);
      // console.log("userColorType ->" + element.personalityType);
      // console.log("TypeOF color ->" + typeof element.personalityType);
      // console.table(element);
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
  console.log(userArrayBlue);
  console.log(userArrayYellow);
}

getUsers();
