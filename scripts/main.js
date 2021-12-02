// Image switcher code

let myImage = document.querySelector('img');//基本的にletで変数宣言
//documentは組み込みのオブジェクト
//ブラウザが表示しているページ。DOMとも呼ぶ。Document Object Model の略。
//querySelector はページの一部(HTML要素)を選ぶ関数。
//
myImage.onclick = function() {//mayImageをクリックしたら呼び出してねという意味
  let mySrc = myImage.getAttribute('src');//名前のない関数
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/myimage.png');//画像を入れ替えている
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//console.log(myHeading);
function setUserName() {
  let myName = prompt('名前を入力してください');
  //promptは組み込みの関数。prompt (pop-up) Windowを表示して、ユーザ入力させる。
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを特別な場所(変数ではない、ファイルなどに相当)に保存する。
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  //以前に特別な場所(ファイルなど)保存してた名前があれば、それを使う。
  setUserName();//function setUserNameの呼び出し
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
