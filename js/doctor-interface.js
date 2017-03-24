var Doctor = require('./../js/doctor.js').doctorModule;

var callback = function(response) {
  for (i = 0; i < response.data.length; i ++) {
    $('#results').append(
      '<h4>' + response.data[i].profile.first_name + ' ' +
      response.data[i].profile.middle_name +  ' ' +
      response.data[i].profile.last_name +  ', ' +
      response.data[i].profile.title + '</h4>' +

      '<p>' + response.data[i].specialties[0].name + '</p>' +

      '<p>' + response.data[i].practices[0].name + '</p>' +

      '<p>' + response.data[i].practices[0].visit_address.street + '<br>' +
      response.data[i].practices[0].visit_address.street2 + '<br>' +
      response.data[i].practices[0].visit_address.city + ', ' +
      response.data[i].practices[0].visit_address.state + ' ' +
      response.data[i].practices[0].visit_address.zip + '</p>' +

      '<p>' + response.data[i].practices[0].phones[0].number + ', ' +
      response.data[i].practices[0].phones[0].type + '</p><br><br>'
    );
  }
}

$(document).ready(function() {
  var doctorObject = new Doctor();

  $('#input-issue').submit(function() {
    event.preventDefault();
    $('#results').empty();
    var medicalIssue = $('#medical-issue').val();
    $('#confirm-input').text('You searched for doctors who can treat ' + medicalIssue + '.');
    $('#results').append('<h3>Here are your results:</h3><br>');
    doctorObject.getDoctors(medicalIssue, callback);
  });
});
