// Password matching verification

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm-password').value) {
      document.getElementById('message').style.color = 'lightgreen';
      document.getElementById('message').innerHTML = 'matching ✔';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching ✖';
    }
  }