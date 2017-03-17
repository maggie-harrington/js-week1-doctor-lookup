$(document).ready(function() {
  $('#input-issue').submit(function() {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    console.log(medicalIssue);
    $('#confirm-input').text('You searched for doctors who can treat ' + medicalIssue + '.');
    $('#results').append('<h4>Here are your results:</h4><br>');
    $('#results').append('<li>' + 'results here' + '</li>');
  });
});
