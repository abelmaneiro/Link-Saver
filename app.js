const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
let linkCategories = [];
let links = [];

linkCategory.addEventListener('keydown', function(event) {
    if (event.keyCode == 188) {
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        linkCategory.value = "";
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Display Categories " + linkCategories);
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title: title,
        url,  // short way of doing above, JS implies url: url
        categories
    }
    links.push(newLink)
    linkTitle.value = "";
    linkUrl.value = "";
    linkCategory.value = "";
    linkCategories = [];
    displayLinkCategories();

    console.log("links " + links);
})

