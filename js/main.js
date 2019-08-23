//JS script

function run() {
  let elems = document.querySelectorAll("*");
  let spyelems = [];
  
  //Get all spy elements  
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].dataset.spy == "scroll") {
      spyelems.push(elems[i]);      
    }
  }
  
  //Add window listener and check element position
  for (let i = 0; i < spyelems.length; i++) {
    let e = spyelems[i];
    window.addEventListener("scroll", function(){checkPosition(e)}, false);
  }
  
}

function checkPosition(elem) {
  //Calculate element position  
  let elemPosition;
  
  if(window.scrollY){
     elemPosition = elem.offsetTop - window.innerHeight - window.scrollY;
  }
  else {
    //IE compatibility
    elemPosition = elem.offsetTop - window.innerHeight - document.documentElement.scrollTop;
  }   
  
  //If element is visible in the current window add "active" class to animate
  if (elemPosition < (0 - (elem.offsetHeight/2))) {
    addClass(elem, "active");    
  }
}

function addClass(elem, newClass) {
  if (elem.classList) {
    elem.classList.add(newClass);
  }
  else {
    let arr = elem.className.split(" ");
    let i = arr.indexOf(newClass);
    if (i == -1) {
      arr.push(newClass);
      elem.className = arr.join(" ");
    }
  }
}

window.onload = run;