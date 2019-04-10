# Js-basics

## Bubbling and Capturing aka Trickling

* Bubbling and capturing are the two way of event propagation in the DOM tree
* Suppose we have a div structre like below
```html
    <div id="grandparent">
        <div id="parent">
            <div id="child"></div>
        </div>
    </div>
```
* Onclick method of child will trigger child method... Onclick method of parent will trigger parent method.. Onclick method of grandparent will trigger grandparent method.

### Event Bubbling

* In case of event bubbling the onlcick child method will be called first and then it will move upwards to the parent and then to grandparent.ie it will go directly till the end of the DOM. For your rememeberence we could imagine that bubble always comes out... so that you won't forget.

* Here from element you clicked to the top DOM.

```js
    document.querySelector("#parent")
        .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, false);
```
* here we didn't pass any value.
```js
    document.querySelector("#parent")
        .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    });
```


### Event Capturing  aka Trickling

* Event Capturing is opposite to bubbling, this Capturing also known as trickling which follows top down approach. It is capturing down the DOM tree. ie from top DOM to the element you clicked.

```js
    document.querySelector("#parent")
        .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, true);
```
* Here "true" is use capture boolean argument, on the basis of use capture it will decide bubbling or capturing, if it is true means , it will take as capturing, if we don't pass any value or we pass a false value here the events will bubble up.

### Note
* This very costly operation this might cause performace issue like if we click child if it needs to propagate from top to the element we clicked.. to avoid this issue we could stop propagation at any time
```js
    document.querySelector("#grandparent")
        .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
        e.stopPropagation();
    }, true);

```
* after "stopPropagation" propagtion will be stopped , will it not propagate futher..

* if we combine both false and true value for use capture what will happen ??

```js

    document.querySelector("#grandparent")
        .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, true);

    document.querySelector("#parent")
        .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, false);

    document.querySelector("#child")
        .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);

    //output : Grandparent Clicked!
    //         Child Clicked!
    //         Parent Clicked!

```
* Here the first preference will be given to capturing down after that bubbling up will happen in second cycle.
* if we click child on capturing cycle "Child Clicked!" and then in bubbling cycle " Parent Clicked! & Grandparent Clicked!" will be printed.
```js

    document.querySelector("#grandparent")
        .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, false);

    document.querySelector("#parent")
        .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, false);

    document.querySelector("#child")
        .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);

    //output : Child Clicked!
    //         Parent Clicked!
    //         Grandparent Clicked!

```