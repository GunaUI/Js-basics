# Js-basics

## Async Vs Defer
* Async and Defer are boolean attributes which are used along with script tag to load the external script efficiently into our page..
* Normally when you load a webpage, there are two major things happening in your browser..
    * HTML Parsing
    * Loading of the script
        * Fetching the script from the network 
        * Executing the script line by line

### Normal Scenario
* In the normal scenario it will parsing the HTML , when this HTML met script tag, it will pause the HTML parsing, immediately it will start downloading the script then it will execute , after complete the entire script execution it will start parsing the HTML again from where it stops.. This is not a good case.

### Async Scenario
* In async scenario, it will parsing the HTML , when this HTML met script tag, it will start downloading script simultaneously with the HTML parsing. once the script downloaded completely. it will pause HTML parsing and start executing the script. once the script execution done it will continue the HTML parsing .

### Defer Scenario
* In defer scenario, HTML parsing will not stopped even after it met the script tag, it will continue download but HTML Parse won't stopped... it will continue, once HTML Parse done it will start executing the script.

<img width="884" alt="Screen Shot 2019-04-08 at 5 50 22 PM" src="https://user-images.githubusercontent.com/22883945/55728566-eb5abb00-5a31-11e9-91fa-7035ac504fcd.png">

<img width="607" alt="Screen Shot 2019-04-08 at 7 23 31 PM" src="https://user-images.githubusercontent.com/22883945/55729504-e0a12580-5a33-11e9-86f1-6097590aae34.png">

