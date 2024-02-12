
const inputBox =  document.getElementById("input_box");

const listContainer =  document.getElementById("list_container");
const onButton =  document.getElementById("button")

//add task function
function addTask () {
   
    if(inputBox.value === ''){
        alert("you must whrite something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML =  inputBox.value;
        listContainer.appendChild(li)
        let span =  document.createElement("span"); 
        span.innerHTML = '<i class="bi bi-x"></i> '     
        li.appendChild(span)
    
    }
    inputBox.value = "";
    saveData();

}

onButton.addEventListener('click', addTask)

// remove task 

listContainer.addEventListener( "click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//ინფორმაციის შენახვა ლოკალ სთორიჯში

function saveData () {
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML =  localStorage.getItem("data");
}
showTask();

