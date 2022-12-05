var links = {
  setcolor : function(color){
    document.querySelector('body').style.color=color;
  }
}

var body = {
  setcolor : function(color){
    document.querySelector('body').style.color=color;
    }
    setbackgroundcolor : function(color){
      document.querySelector('body').style.backgroundcolor=color;-
    }

}

function linkSetColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = 'color';
    i = i + 1;
  }
}

function bodySetColor(color){
  document.querySelector('body').style.color=color;
}

function bodySetBackgroundColor(color){
  docment.querySelector('body').style.backgroundColor=color;
}

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    Body.setBackgroundColor('black');
   bodySetColor('white');
    self.value = 'day';
    linksSetColor('powderblue');
    setColor('powderblue');


  } else {
      Body.setBackgroundColor('white');
    bodySetColor('black');
    self.value = 'night';
    linksSetColor('blue');
    setColor('blue');
  }
}
