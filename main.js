
//allows for the toggle function to work so that you are able to zoom in and out by clicking the image.
function zoom(picture) {
    picture.classList.toggle("zoomed")
}


//allows for the user iput of the user's name to be displayed in between Welcome and !
function promptForName() {
    var userName = prompt("Please enter your name: ");
    if (userName) {
        document.getElementById('nameDisplay').innerText = 'Welcome, ' + userName + '!';
    }
}


//this is responsible for seting the background color to #833b83 and the hovered text to #59f206 
function hoverEffect(element) {
    element.style.backgroundColor = '#833b83';
    element.style.color = '#59f206';
}


//this is responsible for reseting the the background color and the text color to what it was before the change that occured in the hover effect function
function normalEffect(element) {
    element.style.backgroundColor = '';
    element.style.color = '';
}

