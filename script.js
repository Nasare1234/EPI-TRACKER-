const childForm = document.getElementById('childForm');

const searchBtn = document.getElementById('searchBtn');

const searchResults = document.getElementById('searchResults');

childForm.addEventListener('submit', function(event) {

  event.preventDefault();

  const childName = document.getElementById('childName').value;

  const dateOfBirth = document.getElementById('dateOfBirth').value;

  const address = document.getElementById('address').value;

  const immunizationStatus = document.getElementById('immunizationStatus').value;

  const vitaminAStatus = document.getElementById('vitaminAStatus').value;

  const nextDueDate = document.getElementById('nextDueDate').value;

  

  // Here you can save the data to your database or perform any other necessary actions

});

searchBtn.addEventListener('click', function() {

  // Implement search functionality here and display results in the searchResults element

});