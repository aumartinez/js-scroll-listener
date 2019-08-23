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
  
  elemsArr(spyelems);  
}

function elemsArr(arr) {
  let elempos;
  
  for (let i = 0; i < arr.length; i++) {
    getElemsPos(arr[i]);
  }
}

function getElemsPos(elem) {
  
}

window.onload = run;