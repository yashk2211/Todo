let body = document.querySelector("body");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".btn-dark")
let nav = document.querySelector("nav")

const saveTodo = (e) => {
  e.preventDefault();
  let h1 = document.createElement("h3")
  let li = document.createElement("li");
  h1.innerText = input[0].value;
  h1.className= "text-center display-7"
  li.innerText = input[1].value;
  li.className = "list-group-item rounded-0 d-flex flex-column-reverse";
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "btn btn-sm btn-danger rounded-0 float-end";
  li.appendChild(h1);
  
  ul.appendChild(li);
  li.appendChild(btn);
  form.reset();
};

form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", removeTodo);


 let count = 1;
 const runEvent = (e) => {
  e.preventDefault();
  
  if (count % 2 === 0) {
    let li = e.target.parentElement;
    body.className = "body bg-dark text-light";
    // form.className = "form bg-dark text-light";
    // input[0].className = "form-control rounded-0 bg-dark text-light";
    // input[1].className = "form-control rounded-0 bg-dark text-light";
    // ul.className = "mt-2 list-group bg-dark text-light";
    nav.className ="bg-dark text-light";
    btn.className ="align-self-end mt-3 btn btn-light rounded-0"
    
    
    

    
  } else {

    body.className = "body bg-light text-dark";
    // form.className = "form bg-light text-dark";
    // input[0].className = "form-control rounded-0 bg-light text-dark";
    // input[1].className = "form-control rounded-0 bg-light text-dark";
    // ul.className = "mt-2 list-group bg-light text-dark";
    nav.className ="bg-warning text-dark";
    btn.className ="align-self-end mt-3 btn btn-dark rounded-0"
    // li.className = "list-group-item rounded-0 d-flex flex-column-reverse bg-light text-dark";

  }

  count = count + 1;
};

btn.addEventListener("click", runEvent);

