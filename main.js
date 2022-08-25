// select Elements

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let input = document.getElementById("the-input");

// Loop over spans
allSpans.forEach(span =>{
    // Add event on click on span
    span.addEventListener("click" , (e) =>{
        // check condition
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        // add condition
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        // delete condition
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        // show condition
        if (e.target.classList.contains("show-item")) {
            showItem();
        }
    });
});

// Create function to show message
function showMessage() {
    // Add text
    results.innerHTML = "Input can't be empty";
}

// Create check function
function checkItem() {
    
    // check condition
    if (input.value !== '') {
        
        // check if item is in local storage
        if (localStorage.getItem(input.value)) {
            // add results
            results.innerHTML = `Found in local storage Item Called <span>${input.value}</span>`
        }// when item isn't in local storage
        else {

            results.innerHTML = `No Local Storage Item With The Name <span>${input.value}</span>`;
      
          }
    } else {
        // trigger show message function
        showMessage();
    }
}