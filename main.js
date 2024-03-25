document.addEventListener('DOMContentLoaded', function () {
    
    //allows for the toggle function to work so that you are able to zoom in and out by clicking the image.
    function zoom(picture) {
        picture.classList.toggle("zoomed");
    }
    var clickableSelfie = document.getElementById('clickableSelfie');
    if (clickableSelfie) {
        clickableSelfie.addEventListener('click', function() {
            this.classList.toggle("zoomed");
        });
    }

    //allows for the user input of the user's name to be displayed in between Welcome and !
    function promptForName() {
        var userName = prompt("Please enter your name: ");
        if (userName) {
            document.getElementById('nameDisplay').innerText = 'Welcome, ' + userName + '!';
        }
    }

    //this is responsible for setting the background color to #833b83 and the hovered text to #59f206
    function hoverEffect(element) {
        element.style.backgroundColor = '#833b83';
        element.style.color = '#59f206';
    }

    //this is responsible for reseting the background color and the text color to what it was before the change that occured in the hover effect function
    function normalEffect(element) {
        element.style.backgroundColor = '';
        element.style.color = '';
    }

    //this is responsible for handling any form submission
    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            //responsible for retrieving the existing data from local storage
            var existingData = JSON.parse(localStorage.getItem('formDatas')) || [];

            var formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                email: document.getElementById('email').value,
                favcolor: document.getElementById('color').value,
                feedback: document.getElementById('feedback').value,
                newsletter: document.getElementById('newsletter').checked
            };

            //responsible for appending new form data to existing data
            existingData.push(formData);

            //this is responsible for storing the updated array back into local storage
            localStorage.setItem('formDatas', JSON.stringify(existingData));

            //this is responsible for logging saved data for verification
            console.log('New form data added:', formData);
            console.log('All form data:', existingData);

            //responsible to clear the form fields after submission
            form.reset();
        });
    }

    //responsible for handling form reset and local storage clearance
    var resetButton = document.querySelector('input[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            localStorage.clear();
            //responsible for log clearance for verification
            console.log('Local storage cleared');
        });
    }

    function increaseFontSize() {
        var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        document.body.style.fontSize = (currentSize + 1) + 'px';
    }
    
    function decreaseFontSize() {
        var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var currentSize = parseFloat(style);
        document.body.style.fontSize = (currentSize - 1) + 'px';
    }
    
    function toggleColorTheme() {
        document.body.classList.toggle('high-contrast');
    }
    
    document.getElementById('increase-font-size').addEventListener('click', increaseFontSize);
    document.getElementById('decrease-font-size').addEventListener('click', decreaseFontSize);
    document.getElementById('toggle-color-theme').addEventListener('click', toggleColorTheme);    
    
});