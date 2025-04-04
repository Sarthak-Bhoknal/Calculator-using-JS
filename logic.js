// querySelectorAll-> select all the buttons(tags) which having className .button 
//Array.from(buttons) ->making array from buttons
//.forEach((button)=>{ }) -> in forEach loop, define function to access value of foreach button
//addEventListner('eventname','function') <-SYNTAX ,on click event each time function 
// having the arg(e-event) target->Get the element where the event occurred
//string = string + e.target.innerHTML; ->concatinating innerHTML(number) of element(btn) with string
//doc.querySelector('input').value = string; -> puting string value in input

// eval(string)-> It will evaluate the source string as a script body, which means both statements and expressions are allowed

let string = ""; //initially string is empty
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})