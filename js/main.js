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
  
  for (let i = 0; i < spyelems.length; i++) {
    window.addEventListener("scroll", function(){checkPosition(spyelems[i])}, false);
  }
  
}

function checkPosition(elem) {
  let elemPosition = elem.offsetTop - window.innerHeight - window.scrollY;
  
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
      elem.clasName = arr.join(" ");
    }
  }
}

window.onload = run;