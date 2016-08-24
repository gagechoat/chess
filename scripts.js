var pieces = document.querySelectorAll("p");
console.log('peices = ', pieces);

for (var i = 0; i < pieces.length; i++) {
  console.log('i = ' + i);
  pieces[i].addEventListener('click', function(e) {
    console.log('clicked!');
    clearActive();
    e.target.classList.add('active');
  }, false);
}

function clearActive() {
  document.querySelector('.active').classList.remove('active');
}
