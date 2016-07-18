// Your JS goes here


for (var j = 0; j < 9; j++) {
  for (var i = 0; i < 9; i++) {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if(i%2===j%2){
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.backgroundColor = linear-gradient();
      div.style.float = 'left';
    }
    else{
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.backgroundColor = linear-gradient();
      div.style.float = 'left';
    }
  };
}
