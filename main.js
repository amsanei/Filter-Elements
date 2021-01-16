var spans = document.querySelectorAll(".tags span");
var liTags = document.querySelectorAll(".filter-list ul li");
var selected = [];

var input,value,ul,li,filterTxt;
input = document.getElementById("searchInput");
ul = document.querySelector(".filter-list ul");
li = ul.getElementsByTagName("li");

input.addEventListener("keyup",search);

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

function search() {
    inputValue = input.value.toUpperCase();
    for(let i=0;i<li.length;i++){
        liTxt = li[i].innerText;
        console.log(filterTxt);
        if(liTxt.toUpperCase().indexOf(inputValue) > -1)
            li[i].style.display = "";
        else
            li[i].style.display = "none";
    }
}