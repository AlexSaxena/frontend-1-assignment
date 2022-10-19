<a id="readme-top"></a>

# Frontend 1 Assignment - JSON

<!-- PROJECT START -->
<br />
<div align="center">

<h3 align="center">Assignment Frontend 1</h3>

  <p align="center">
   Fetching Data from an JSON file
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#assignment-definition">Assignment & Definition</li>
      <ul>
        <li><a href="#defining-the-assignment">Defining The Assignment</a></li>
      </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#further-development">Further Development</a></li>
    <li><a href="#author-&-contact">Author & Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)
<br>

<p> An application to showcase the basics of fetching and displaying data from a JSON file. </p>
<p> In this App userdata from JSON is being parsed and sorted based on personality colour </p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![html]][html-url]
- [![css]][css-url]
- [![javascript]][javascript-url]
- [![node]][node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.
<br>

### Prerequisites

Before starting make sure you have the latest version of NPM installed.
<br>
You can install the latest version using this commmand

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AlexSaxena/frontend-1-assignment.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Check that the port is set to 3000 in `server.js`
   ```js
   const port = process.env.DEV_SERVER_PORT || 3000;
   ```
4. Run the program
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Assignment Definition -->

## Assignment Definition

### Defining The Assignment

<p>Simple version: </p>

```
 In this assignment I have been tasked to retrive data from a certain type of file and then after sorting them display the data on a webbpage.
```

<p>Technical version:</p>

```
 In this assignment I have been given several JSON files containing several User data objects and the goal is to Fetch with promises,
 Sort using a custom function and then upon request display the data on the DOM based of the sorted parameters.
```

<!-- USAGE EXAMPLES -->

## Usage

The code in this application is quite simple but in essence performs a very essential task that is used almost daily in any big application and/or program.
<br>
This APP is a simple sorter that **_Fetches_**, parses and then sorts JSON data based on the inputs and dynamically builds a Table on the DOM.
<br> <br>
Ignoring the part of building a dynamic table the code in question is a base that can be adjusted and optimised to be used in any program that needs <br>
to Fetch and handle data from for example a server or API.
<br>
_IE , Getting a users information when loggin in._

_For more examples & usages of fetch, please refer to the [MDN Fetch Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Further Development

<p>As mentioned earlier this code is a good start if you need to get and modify/sort data from a JSON file.</p>
<p>If another developer wanted to reuse this code they could do that following a few simple steps </p>

1. Adjust the Fetch URL to fetch their desired data

   ```js
   `Here the function uses Fetch to get the data in form of a promise and then parses the data for further usage.`;

   function getUsers() {
     fetch("http://yourCoolAPI")
       .then((response) => (response = response.json()))
       .then((users) => {
         allUsersJSON = users;
       });
   }
   ```

2. Update the Filter so that your desired Parameters are selected from the JSON Object
   ```js
   const userFilter = ({ firstname, lastname, yourParam, anotherOne }) => ({
     firstname,
     lastname,
     yourParam,
     anotherOne,
   });
   ```
3. Update the Sorter Functions Array names to fit your program & Params
   ```js
   function sortByColour(colour = "rest") {
   let userArrayRed = [];
   let userArrayYellow = [];
   let userArrayBlue = [];
   let userArrayGreen = [];
   let userArrayRest = [];
   ```
4. Further update Sorter Function To search for you Param instead of personalityType
   ```sh
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
   ```

<!-- Author & CONTACT -->

## Author & Contact

Author: **_Alex Saxena_**
<br>
Github: [https://github.com/AlexSaxena/](https://github.com/AlexSaxena/)
<br>
Project Link: [https://github.com/AlexSaxena/frontend-1-assignment](https://github.com/AlexSaxena/frontend-1-assignment)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: images/screenshot.png
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://www.w3schools.com/html/
[css]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[javascript-url]: https://www.javascript.com/
[node]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
