var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorObject = new Doctor();
  doctorObject.getDoctors();

  $('#input-issue').submit(function() {
    event.preventDefault();
    $('#results').empty();
    var medicalIssue = $('#medical-issue').val();
    $('#confirm-input').text('You searched for doctors who can treat ' + medicalIssue + '.');
    $('#results').append('<h3>Here are your results:</h3><br>');
    doctorObject.getDoctors(medicalIssue);
  });
});
