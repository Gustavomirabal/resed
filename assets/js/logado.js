firebase.auth().onAuthStateChanged(function(user) {
  var elm = document.querySelector("#elm");
  console.log('teste' + elm)
  if (user) {
    elm.style.display = 'block';
  }else{
   elm.style.display = 'none';
  }
});
