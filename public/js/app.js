//NAVIGATION AREA
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

//POST AREA
var content = document.getElementById('content');

//Creates "postContainer" from content
var postContainer = document.createElement('div');
postContainer.classList.add('postContainer');
content.appendChild(postContainer);

  //Creates "post" from content
  var post = document.createElement('div');
  post.classList.add('post');
  postContainer.appendChild(post);

    //Creates <img> from post
    var imgPost = document.createElement('img');
    imgPost.src ="asdf";
    post.appendChild(imgPost)

    //Creates "postHeader" from post
    var postHeader = document.createElement('div');
    postHeader.classList.add('postHeader');
    postHeader.innerHTML = "header here";
    post.appendChild(postHeader);

    //Creates "postMetaData" from post
    var postMetaData = document.createElement('div');
    postMetaData.classList.add('postMetaData');
    postMetaData.innerHTML = "Author/ Date Posted / views";
    post.appendChild(postMetaData);

    //Creates "postContent" from post
    var postContent = document.createElement('div');
    postContent.classList.add('postContent');
    postContent.innerHTML = "Content Here,Content Here,Content Here,Content Here,Content Here ";
    post.appendChild(postContent);