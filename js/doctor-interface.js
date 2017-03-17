var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#input-issue').submit(function() {
    event.preventDefault();
    $('#results').empty();
    var medicalIssue = $('#medical-issue').val();
    console.log(apiKey);
    $('#confirm-input').text('You searched for doctors who can treat ' + medicalIssue + '.');
    $('#results').append('<h3>Here are your results:</h3><br>');
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey,
    function(response) {
      console.log(response);
      $('#results').append(
        '<h4>' + response.data[0].profile.first_name + ' ' +
        response.data[0].profile.middle_name +  ' ' +
        response.data[0].profile.last_name +  ', ' +
        response.data[0].profile.title + '</h4>' +

        '<p>' + response.data[0].specialties[0].name + '</p>' +
        
        '<p>' + response.data[0].practices[0].name + '</p>' +

        '<p>' + response.data[0].practices[0].visit_address.street + '<br>' +
        response.data[0].practices[0].visit_address.street2 + '<br>' +
        response.data[0].practices[0].visit_address.city + ', ' +
        response.data[0].practices[0].visit_address.state + ' ' +
        response.data[0].practices[0].visit_address.zip + '</p>' +

        '<p>' + response.data[0].practices[0].phones[0].number + ', ' +
        response.data[0].practices[0].phones[0].type + '</p><br><br>'
      );
    });
  });
});
