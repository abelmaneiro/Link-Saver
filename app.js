const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel")
const linksList = document.querySelector("#linksList")
const addedCategories = document.querySelector("#addedCategories")

let linkCategories = [];
let links = [
    { title: 'New Link 1', url: 'url1.com', categories:['node', 'angular']},
    { title: 'New Link 2', url: 'url2.com', categories:['js', 'angular']},
    { title: 'New Link 3', url: 'url3.com', categories:['node', 'bootstrap']},
];

displayLinks()

addBtn.addEventListener('click', (event) => {
    showFromPanel();
})

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();

    hideFromPanel();
})

function showFromPanel(){
    addLinkPanel.classList.remove("hidden");

}

function hideFromPanel(){
    addLinkPanel.classList.add("hidden");
    clearLinkForm();
}

linkCategory.addEventListener('keydown', function(event) {
    if (event.keyCode == 188) {
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        linkCategory.value = "";
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    addedCategories.innerHTML = ""
    for (let category of linkCategories) {
        let categoryHTMLString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString
    }
}

function clearLinkForm() {
    linkTitle.value = "";
    linkUrl.value = "";
    linkCategory.value = "";
    linkCategories = [];
    addedCategories.innerHTML = "";
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
    links.unshift(newLink)
    clearLinkForm();
    
    displayLinkCategories();
    hideFromPanel();
    displayLinks();
})

function displayLinks() {
    linksList.innerHTML = ""
    for (let link of links) {
        let linkHTMLString = `
            <div class="link panel">
			    <div class="link-options">
				    <button class="btn-sm">Delete</button>
				    <button class="btn-sm">Edit</button>
			    </div>
			    <a href="${link.url}">
				    <h1 class="header">${link.title}</h1>
		    	</a>
			    <p class="link-date">${Date.now()}</p>
			    <div class="categories">
			    	Categories:`;
        for (let category of link.categories) {
            linkHTMLString += `<span class="category">${category}</span>`;
        }
        linkHTMLString += `
			        </div>
		    </div>`;
        linksList.innerHTML += linkHTMLString;
    }
}

