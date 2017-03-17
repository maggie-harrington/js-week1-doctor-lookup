var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#input-issue').submit(function() {
    event.preventDefault();
    $('#results').empty();
    var medicalIssue = $('#medical-issue').val();
    console.log(apiKey);
    $('#confirm-input').text('You searched for doctors who can treat ' + medicalIssue + '.');
    $('#results').append('<h4>Here are your results:</h4><br>');
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey,
    function(response) {
      console.log(response);
      $('#results').append('<li>' + 'results here' + '</li>');
    });
  });
});
