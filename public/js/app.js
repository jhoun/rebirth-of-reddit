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


//Request to get data
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getData);
oReq.open("GET", "https://www.reddit.com/r/aww/.json");
oReq.send();

//Get Image function
function getData(){
  var aww = JSON.parse(this.responseText);
  console.log(aww);

  for (var i = 0; i < aww.data.children.length; i++){
    //variables from reddit data
    var url = aww.data.children[i].data.url;
    var title = aww.data.children[i].data.title;
    var author = aww.data.children[i].data.author;
    var date = aww.data.children[i].data.created;
    var newDate = new Date( date * 1000);

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


    //to find if gif img is valid
    var isGif = /gifv/i.test(url);
    if (isGif){
      var url = url.replace(/gifv/i, 'gif');
    }

    //Creates <img> from post
    var imgPost = document.createElement('img');
    imgPost.src = url;
    imgContainer.appendChild(imgPost)

    //Creates "postHeader" from post
    var postHeader = document.createElement('div');
    postHeader.classList.add('postHeader');
    postHeader.innerHTML = title;
    post.appendChild(postHeader);

    //Creates "postMetaData" from post
    var postMetaData = document.createElement('div');
    postMetaData.classList.add('postMetaData');
    postMetaData.innerHTML = "by " + author + " * " + newDate ;
    post.appendChild(postMetaData);
  }
}

    //Creates "postContent" from post
    var postContent = document.createElement('div');
    postContent.classList.add('postContent');
    postContent.innerHTML = "Content Here,Content Here,Content Here,Content Here,Content Here ";
    post.appendChild(postContent);

