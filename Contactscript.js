document.getElementById('myForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg').style.display = 'block';
  this.reset();
});
