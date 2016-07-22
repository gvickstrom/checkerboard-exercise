// Your JS goes here


for (var j = 0; j < 9; j++) {
  for (var i = 0; i < 9; i++) {
    if(i%2===j%2) {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.background = 'linear-gradient(0deg, red, yellow )';
      div.style.float = 'left';
    }
    else{
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.background = 'linear-gradient(0deg, yellow, red)';
      //need to fix gradient
      div.style.float = 'left';
    }
  };
}
