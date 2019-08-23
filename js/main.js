//JS script

function run() {
  let elems = document.querySelectorAll("*");
  let spyelems = [];
    
  for(let i = 0; i < elems.length; i++){    
    if (elems[i].dataset.spy == "scroll") {
      spyelems.push(elems[i]);      
    }
  }
}

window.onload = run;