# Js-basics

## Event delegation

* Event delegation is the method of handling events in the better way.
* Event delegation is based up on event bubbling. Just because event bubbling exist event delegation also exist.
* Event delegation gave us the better way of handling the event listeners.
* Suppose we need to add events to n number of list element . Instead of adding events to all the list elements we could add a single event to the parent of the list and then from that parents listener we could delegate as the listener to the child list element this is called event delegation.
* for example
```js
<ul id="category">
    <li id="laptops">laptops</li>
    <li id="cameras">cameras</li>
    <li id="shoes">shoes</li>
</ul>

document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName == 'LI') {
        window.location.href = "/" + e.target.id;
    }
});
```
* here single event added to category id , so that we could avoid each seperate listeners to all li element. we could access the clikced child element using "e.target" property.
* Example 2
```js
<div id="form">
    <input type="text" id="name" data-uppercase>
    <input type="text" id="pan">
    <input type="text" id="mobile" data-uppercase>
</div>
```
* data-uppercase is user defined attribute.. if you log event.target in your js you could clearly see this user defined attribute (uppercase) in dataset

```js
document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})

```
* here we are delegating the uppercase functionality to any element which has data-uppercase attribute assigned. we have made this functionality once but we can resuse this to n number of child element.

#### Benefit
* Memory- it saves lot of memory
* Writing less code
* Dom manipulation- it will be tought to add element and then attach the listener.here we are attaching the event to the parent div

#### Limitaion
* All the events are not bubbled up example blur, focus, resizing of the window, scroll.... there are events which don't bubble up.
* It won't work in case if you use stop propagation..