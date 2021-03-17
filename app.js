const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel")
const addedCategories = document.querySelector("#addedCategories")
const linksList = document.querySelector("#linksList")
const addLinkContainer = document.querySelector("#addLinkContainer")

let editIndex = -1;
let linkCategories = [];
let links = [
    {
		title: 'Wes Bos Courses',
		url: 'http://wesbos.com/courses/',
		categories: ['Node', 'ES6', 'Flexbox', 'React'],
		date: new Date()
	},
	{
		title: 'Traversy Media',
		url: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
		categories: ['Node', 'CSS', 'Javscript', 'Angular'],
		date: new Date()
	},
	{
		title: 'Colt Steele',
		url: 'https://www.udemy.com/user/coltsteele/',
		categories: ['Node', 'Javascript', 'React', 'MEAN', 'Mongo'],
		date: new Date()
	},
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
    addLinkContainer.classList.remove("hidden");
    displayLinkCategories();
}

function hideFromPanel(){
    addLinkContainer.classList.add("hidden");
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
    editIndex = -1;
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
    if (editIndex === -1 ) {
        links.unshift(newLink)
        clearLinkForm();
    } else {
        links[editIndex] = newLink;
        editIndex = -1;
    }
    
    displayLinkCategories();
    hideFromPanel();
    displayLinks();
})

function displayLinks() {
    linksList.innerHTML = ""
    let index = 0;
    for (let link of links) {
        let linkHTMLString = `
        <div class="flex-item">
            <div class="link panel">
			    <div class="link-options">
				    <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
				    <button class="btn-sm" onclick="editLink(${index})">Edit</button>
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
		    </div>
        </div>`;
        linksList.innerHTML += linkHTMLString;
        index++;
    }
}

function deleteLink(index) {
    links.splice(index, 1);
    displayLinks();
}

function editLink(index) {
    editIndex = index;
    linkTitle.value = links[index].title;
    linkUrl.value = links[index].url;
    linkCategories = links[index].categories;
    showFromPanel();
}