// Your JS goes here

for (var j = 0; j < 9; j++) {
  for (var i = 0; i < 9; i++) {
    if(i%2===j%2){
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.backgroundColor = "black";
      div.style.float = 'left';
    }
    else{
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.backgroundColor = "red";
      div.style.float = 'left';
    }
  };
}
