//JS script

function run() {
  let elems = document.querySelectorAll("*");
  let spyelems = [];
  let elemPosition;
  
  //Get all spy elements  
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].dataset.spy == "scroll") {
      spyelems.push(elems[i]);      
    }
  }
  
  window.addEventListener("scroll", function(){checkPosition(spyelems[0]);}, false);
  
}

function checkPosition(elem) {
  let elemPosition = elem.offsetTop - window.innerHeight - window.scrollY;
  
  if (elemPosition < (0 - (elem.offsetHeight/2))) {
    
  }
  
}

window.onload = run;