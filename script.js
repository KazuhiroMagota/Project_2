let userPoints = 100; //starting score
let ColorRandom = document.querySelector('#backCard');
let cards = document.querySelector('#flipper');
let circles = document.querySelectorAll('.circle');
let coin = document.querySelector('#coin')


circles.forEach(circle => {
  circle.addEventListener('dragover', e =>{
    e.preventDefault();
    circle.classList.add('hovered');
  });

  circle.addEventListener('dragleave', () =>{
    circle.classList.remove('hovered');
  });

  circle.addEventListener('drop', () =>{
    circle.appendChild(coin);
    circle.classList.remove('hovered');
  } )
});







// user's chosen color
document.querySelector('#yellow').addEventListener('drop', ()=>{
  userChoice('yellow')
  flipCard()

});
document.querySelector('#blue').addEventListener('drop', ()=>{
  userChoice('blue')
  flipCard()
});
document.querySelector('#white').addEventListener('drop', ()=>{
  userChoice('white')
  flipCard()
});
document.querySelector('#green').addEventListener('drop', ()=>{
  userChoice('green')
  flipCard()
});
document.querySelector('#red').addEventListener('drop', ()=>{
  userChoice('red')
  flipCard()
});
document.querySelector('#violet').addEventListener('drop', ()=>{
  userChoice('violet')
  flipCard()
});


// functions👇🏽
function flipCard(){
  cards.classList.toggle('flipCard')
}

function makeWinningColor(){
  let colors = ['yellow', 'blue', 'white', 'green', 'red', 'violet'];
  let resultColor = colors[(Math.floor(Math.random() * colors.length))];
  document.querySelector('#backCard').style.backgroundColor = resultColor;
  document.querySelector('#frontCard').style.backgroundColor = resultColor;
  return resultColor;
}

function userChoice(colorChosen){
  let winningColor = makeWinningColor();

  if (colorChosen === winningColor){
    alert ('You got the winning color!');
    userPoints += 5;
  }
  if (colorChosen !== winningColor)

  alert (`The result is ${winningColor}, try again!`)
  userPoints -= 5;

  updatePoints();
};


function updatePoints(){
  document.querySelector('#userPoints').innerHTML = userPoints;
}

// modal
const mechanicsModal = new bootstrap.Modal(document.getElementById('mechanicsModal'));
mechanicsModal.show();