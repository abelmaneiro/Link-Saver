const linkCategory = document.querySelector("#linkCategory");
let linkCategories = [];

console.log(linkCategory); 

linkCategory.addEventListener('keydown', function(event) {
    if (event.keyCode == 188) {
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        linkCategory.value = "";
        console.log(linkCategories);

        displayLinkCategories();
    }
})

function displayLinkCategories() {
    
}

