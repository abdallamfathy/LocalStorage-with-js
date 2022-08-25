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
        
    })
})