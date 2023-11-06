(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict


function updateGeneratedText(content) {
  const generatedTextElement = document.getElementById('generated-text');
  generatedTextElement.textContent = content;
  $('#myModal').modal('show'); // Show the modal
}




document.querySelector('#sendreq').addEventListener('click', function (event) {
  event.preventDefault();
  const userInput = document.querySelector('input[name="textboc"]').value; // Use the correct input name
  if (userInput.trim() !== '') {
    // Check if the input is not empty
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Change content type
      },
      body: `textboc=${encodeURIComponent(userInput)}`, // Send the input properly
    })
      .then(response => response.json())
      .then(data => {
        if (data.generated_text) {
          updateGeneratedText(data.generated_text);
        } else {
          console.error('Generated text is null or empty.');
        }
      });
  } else {
    console.error('Input is empty.');
  }
});
