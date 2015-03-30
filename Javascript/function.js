function toggle(element) {
  var hoverid = document.getElementById(element);
  if(hoverid.style.display == "block") {
    hoverid.style.display = "none";
  } else {
    hoverid.style.display = "block";
  }
};
$('#name').tooltip({'trigger':'focus', 'title': "Please enter your name"});
$('#email').tooltip({'trigger':'focus', 'title': "Questions, comments, concerns? Please leave your email"});
