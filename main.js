var spans = document.querySelectorAll(".tags span");
var liTags = document.querySelectorAll(".filter-list ul li");
var selected = [];


liTags.forEach((li)=>{
    li.addEventListener("click",SelectToggle)
})

function SelectToggle(e){
    if(e.target.classList.length == 0){
        e.target.classList.add("selected");
        selected.push(e.target.textContent);
    }else{
        e.target.classList.remove("selected");
        let index = selected.indexOf(e.target.textContent);
        if (index > -1) {
            selected.splice(index, 1);
        }
    }
    filter();
}

function filter(){
    spans.forEach((item) =>{
        if(selected.includes(item.innerHTML) || selected.length === 0){
            item.parentElement.parentElement.classList.remove("hide");
        }else{
            item.parentElement.parentElement.classList.add("hide");
        }
    })
}