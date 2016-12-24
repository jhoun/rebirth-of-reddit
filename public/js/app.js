//Navigation Area
var topContainer = document.getElementById('topContainer');

//Creates "header" <div> from topContainer
var header = document.createElement('div')
header.id = 'header';
topContainer.appendChild(header);

  //Creates <img> from header
  var imgLogo = document.createElement('img');
  imgLogo.src = "./assets/logo.svg";
  header.appendChild(imgLogo);

  //Creates "plusBtn" from header
  var plusBtn = document.createElement('div');
  plusBtn.id = 'plusBtn';
  plusBtn.innerHTML = '+';
  header.appendChild(plusBtn);

//Creates <nav> from topContainer
var nav = document.createElement('nav');
topContainer.appendChild(nav);

  //Creates "random" from nav
  var random = document.createElement('div')
  random.innerHTML = 'RANDOM';
  random.id = 'random';
  random.classList.add('font');
  nav.appendChild(random);

  //Creates "myBoard" from nav
  var myBoard = document.createElement('div')
  myBoard.innerHTML = 'MY BOARD';
  myBoard.id = 'myBoard';
  myBoard.classList.add('font');
  nav.appendChild(myBoard);

  //Creates "getApp" from nav
  var getApp = document.createElement('div')
  getApp.innerHTML = 'GET THE APP';
  getApp.id = 'getApp';
  getApp.classList.add('font');
  nav.appendChild(getApp);