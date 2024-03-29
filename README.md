# A js-scroll-listener sample

A JS scroll listener sample, will animate an HTML element when the element is revealed in the viewport window as the user scrolls down the window.

## Listening to the scrolling window

Using JS and setting up the elements to animate with a data attribute, a window event listener is called and once the distance between the element and the top of the window reaches a certain condition an "active" class state is added to the element.

Then you can use the .active class selector to apply a transition or animation to the HTML element.

```html
<!-- html content -->

<div class="cont-fade-in" data-spy="scroll">
  <p>
    This paragraph will be displayed with a fade in effect and translated from below. 
    For the animation we will use keyframes.
  </p>
</div>

<!-- more html content -->
```

Once the element is on the screen sight it will change to:

```html
<!-- html content -->

<div class="cont-fade-in active" data-spy="scroll">
  <p>
    This paragraph will be displayed with a fade in effect and translated from below. 
    For the animation we will use keyframes.
  </p>
</div>

<!-- more html content -->
```

Ready to apply some styling like:

```CSS
.cont-fade-in.active {
  animation: fade-in 2s ease;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  0%{
    transform: translateY(50px);
    opacity: 0;
  }  
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
```

The trick is to create an array with all the elements and filter the ones with the attribute <code>data-spy="scroll"</code>, the below JS script does the job:

```Javascript
  let elems = document.querySelectorAll("*");
  let spyelems = [];
  
  //Get all spy elements  
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].dataset.spy == "scroll") {
      spyelems.push(elems[i]);      
    }
  }
```

You may review a working sample at: http://accedo-gps.000webhostapp.com/demo/js-scroll-listener/
