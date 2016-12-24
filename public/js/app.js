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

    //Creats "imgContainer" from content
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    post.appendChild(imgContainer);

//Request to get img
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getImg);
oReq.open("GET", "https://www.reddit.com/r/aww/.json");
oReq.send();

//Get Image function
function getImg(){
  var aww = JSON.parse(this.responseText);
  console.log(aww);
  var url = aww.data.children[2].data.url;
  var isGif = /gifv/i.test(url);
  if (isGif){
    var url = url.replace(/gifv/i, 'gif');
  }

  console.log(url);

  //Creates <img> from post
  var imgPost = document.createElement('img');
  imgPost.src = url;
  imgContainer.appendChild(imgPost)

}

//Request to get title
var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", getHeader);
oReq2.open("GET", "https://www.reddit.com/r/aww/.json");
oReq2.send();

//Get Header function
function getHeader(){
  var aww = JSON.parse(this.responseText);
  //Creates "postHeader" from post
  var postHeader = document.createElement('div');
  postHeader.classList.add('postHeader');
  postHeader.innerHTML = aww.data.children[2].data.title;
  post.appendChild(postHeader);
}

var oReqAuthor = new XMLHttpRequest();
oReq2.addEventListener("load", getAuthor);
oReq2.open("GET", "https://www.reddit.com/r/aww/.json");
oReq2.send();

function getAuthor(){
    var aww = JSON.parse(this.responseText);
    var author = aww.data.children[2].data.author;
    var date = aww.data.children[2].data.created;
    var date = new Date( date *1000);

    //Creates "postMetaData" from post
    var postMetaData = document.createElement('div');
    postMetaData.classList.add('postMetaData');
    postMetaData.innerHTML = "by " + author + " * " + date ;
    post.appendChild(postMetaData);
}
    //Creates "postContent" from post
    var postContent = document.createElement('div');
    postContent.classList.add('postContent');
    postContent.innerHTML = "Content Here,Content Here,Content Here,Content Here,Content Here ";
    post.appendChild(postContent);

