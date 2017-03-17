var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  console.log('works');
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    console.log(response);

    for (i = 0; i < response.data.length; i ++) {
      // for (j = 0; j < response.data[i].specialties.length; j ++) {
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
      // }
    }
  })
  .fail(function(response) {
    $('#results').append(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;
