function getContentFromApi(filename, selector) {
  fetch("http://localhost:4000/api/content/" + filename)
    .then((response) => (response = response.json()))
    .then((content) => {
      console.log(content);
      document.querySelector(selector).innerHTML = marked.parse(content.data); // marked är ett externt bibliotek som hanterar markdown filer (.md)
      hljs.highlightAll(); // hljs (highlight.js) ger syntax-highlight i <code>-taggar.
    });
}
getContentFromApi('ovningar1-10.md', '[data-source="content"]')

function getUsers() {
  fetch("http://localhost:4000/api/users/")
    .then((response) => (response = response.json()))
    .then((users) => {
      console.table(users);
    });
}
getUsers();
